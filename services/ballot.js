const Candidate = require('../models/candidate')

import { getPrecinct, getContests } from './arc_gis'

export function getCandidatesPromise(contestIds) {
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

export function getCandidatesForDistrictPromise(dp) {
  return getContestIdsForDistrictPromise(dp).then(contests => {
    return getCandidatesPromise(contests)
  })
}

export function getContestIdsForDistrictPromise(dp) {
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

export function getFullContestsPromise(contestIds) {
  getContests(contestIds).then(results => {
    var contestIdToObject = {}
    results.map(result => {
      contestIdToObject[result.attributes.Contest_ID] = result.attributes
    })

    return contestIdToObject
  })
}

export function findContestsForBallot(id) {
  return getContestIdsForDistrictPromise(id).then(contestIds => {
    return getFullContestsPromise(contestIds)
  })
}

export function getBallot(districtId) {
  return getContestIdsForDistrictPromise(districtId).then(contestIds => {
    return getCandidatesPromise(contestIds).then(candidates => {

      var contestIdToCandidates = {}
      candidates.map(candidate => {
        const { Contest_ID } = candidate
        contestIdToCandidates[Contest_ID] = contestIdToCandidates[Contest_ID] || []
        contestIdToCandidates[Contest_ID].push(candidate)
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
  }).catch(() => {})
}

export function getHardcodedBallot() {
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
