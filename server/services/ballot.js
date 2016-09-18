"use strict"

const { getPrecinct } = require('./arc_gis')
const { getCandidatesForContests, getCandidatesMetadata } = require('./candidate')
const { getPollingPlace } = require('./polling_place')

const CANDIDATE_ID = 'Candidate_ID'

function getDistrictInfo(dp) {
  return getPrecinct(dp).then(results => {
    let pollingId = ''
    let contestsFromAllDistricts = results.map(result => {
      pollingId = result.attributes.PollingID
      return result.attributes.Contests.split('-')
    })

    const allContests = [].concat.apply([], contestsFromAllDistricts)
    return {
      pollingId: pollingId,
      contestIds: allContests,
    }
  })
}

function getCandidatesMappedIntoContests(contestIds) {
  const candidatesForContestsPr = getCandidatesForContests(contestIds)
  return candidatesForContestsPr.then(candidates => {
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

    const candidateMetadataPr = getCandidatesMetadata(candidateIds)
    return candidateMetadataPr.then(candidatesMetadata => {

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

      return contests
    })
  })
}

function getBallot(districtId) {
  return getDistrictInfo(districtId).then(districtInfo => {
    const {pollingId, contestIds} = districtInfo

    const pollingPlacePr = getPollingPlace(pollingId)
    const contestsWithCandidatesPr = getCandidatesMappedIntoContests(contestIds)

    return Promise.all([pollingPlacePr, contestsWithCandidatesPr]).then(results => {
      const ballot = {
        pollingPlace: results[0],
        contests: results[1],
        amendments: [],
      }

      return ballot
    })
  })
}

module.exports = {
  getBallot,
}
