"use strict"

const { getPrecinct } = require('./arc_gis')
const { getCandidatesForContests, getCandidatesMetadata } = require('./candidate')

const CANDIDATE_ID = 'Candidate_ID'

function getContestIdsForDistrictPromise(dp) {
  return getPrecinct(dp).then(results => {
    var contestsFromAllDistricts = results.map(result => {
      return result.attributes.Contests.split('-')
    })

    var allContests = [].concat.apply([], contestsFromAllDistricts)
    return allContests
  })
}

function getBallot(districtId) {
  return getContestIdsForDistrictPromise(districtId).then(contestIds => {
    return getCandidatesForContests(contestIds).then(candidates => {

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

      return getCandidatesMetadata(candidateIds).then(candidatesMetadata => {

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

module.exports = {
  getBallot,
}
