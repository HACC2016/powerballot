"use strict"
const Candidate = require('../models/candidate')
const CandidateMetadata = require('../models/candidate_metadata')

const { getPrecinct, getContests } = require('./arc_gis')

const CANDIDATE_ID = 'Candidate_ID'

function getCandidatesPromise(contestIds) {
  return Candidate
    .query(function(qb) {
      qb.whereIn('Contest_ID', contestIds)
    })
    .fetchAll()
    .then(results => {
      let candidates = results.map(candidateModel => {
        return candidateModel.attributes
      })
      return candidates
    })
}

function getCandidateMetadata(candidateIds) {
  return CandidateMetadata
    .query(function(qb) {
      qb.whereIn(CANDIDATE_ID, candidateIds)
    })
    .fetchAll()
    .then(results => {
      let candidatesMetadata = results.map(candidateMetadataModel => {
        return candidateMetadataModel.attributes
      })

      console.log('Found metadata', candidatesMetadata)
      return candidatesMetadata
    })
}

function setCandidateMetadata(candidateId, metadata) {
  return CandidateMetadata
    .forge({ [CANDIDATE_ID]: candidateId })
    .fetch()
    .then(foundMetadata => {
      let method = 'update'
      if (foundMetadata === null) {
        method = 'insert'
      }

      console.log('method ', method)

      return CandidateMetadata
        .forge({ [CANDIDATE_ID]: candidateId})
        .save(metadata, {method: method})
        .then(savedModel => {
          console.log('Saved metadata', savedModel)
          return savedModel
        })
    })
}

function getCandidatesForDistrictPromise(dp) {
  return getContestIdsForDistrictPromise(dp).then(contests => {
    return getCandidatesPromise(contests)
  })
}

function getContestIdsForDistrictPromise(dp) {
  return getPrecinct(dp).then(results => {

    console.log('Found stuff', results)

    var contestsFromAllDistricts = results.map(result => {
      return result.attributes.Contests.split('-')
    })

    var allContests = [].concat.apply([], contestsFromAllDistricts)

    console.log(allContests)

    return allContests
  })
}

function getFullContestsPromise(contestIds) {
  getContests(contestIds).then(results => {
    var contestIdToObject = {}
    results.map(result => {
      contestIdToObject[result.attributes.Contest_ID] = result.attributes
    })

    return contestIdToObject
  })
}

function findContestsForBallot(id) {
  return getContestIdsForDistrictPromise(id).then(contestIds => {
    return getFullContestsPromise(contestIds)
  })
}

function getBallot(districtId) {
  return getContestIdsForDistrictPromise(districtId).then(contestIds => {
    return getCandidatesPromise(contestIds).then(candidates => {

      var contestIdToCandidates = {}
      var candidateIdToCandidate = {}
      var candidateIds = candidates.map(candidate => {
        const { Contest_ID } = candidate

        candidate.metadata = null
        contestIdToCandidates[Contest_ID] = contestIdToCandidates[Contest_ID] || []
        contestIdToCandidates[Contest_ID].push(candidate)
        candidateIdToCandidate[candidate[CANDIDATE_ID]] = candidate
        return candidate[CANDIDATE_ID]
      })

      return getCandidateMetadata(candidateIds).then(candidatesMetadata => {

        candidatesMetadata.map(metadata => {
          let candidate = candidateIdToCandidate[metadata[CANDIDATE_ID]]
          if (candidate) {
            candidate.metadata = metadata
          }
        })

        const contests = contestIds.map(contestId => {
          return {
            Contest_ID: contestId,
            candidates: contestIdToCandidates[contestId] || [],
          }
        })

        return {
          contests: contests,
          amendments: [],
        }
      })
    })
  })
}

function getHardcodedBallot() {
  return new Promise(function(resolve) {
    resolve(
      {
        contests: [
          {
            Contest_ID: "USS",
            candidates: [
              { id: 161,
                Candidate_ID: 'USSa',
                Contest_ID: 'USS',
                Candidate_Name: 'Allison, Joy J.',
                Candidate_Party: 'C',
                Candidate_FEC: 'S4HI00151',
                Candidate_CSC: 'see FEC',
                created_at: 'Sat Sep 10 2016 10:08:32 GMT-1000 (HST)',
                updated_at: 'Sat Sep 10 2016 10:08:32 GMT-1000 (HST)' },
            ],
          },
        ],
        amendments: [
          {

          },
        ],
      }
    )
  })
}

module.exports = {
  getBallot,
}
