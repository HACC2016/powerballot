"use strict"

const { getPrecinct, getAllContests } = require('./arc_gis')
const { getCandidatesForContests, getCandidatesMetadata } = require('./candidate')
const { getPollingPlace } = require('./polling_place')

const CANDIDATE_ID = 'Candidate_ID'

function getAllContestIds() {
  return getAllContests().then(results => {
    let contestIds = []
    results.forEach(result => {
      let contestId = undefined
      switch (result.attributes.Contest_ID) {

      // TODO: HACK: Need to resolve the issue between PVP and USPVP, shows up
      // as USPVP in the contest ids, but for the candidates field its stored
      // as PVP.
      // UPDATE: both now show up, so just skip it
      case 'USPVP':
        break

      // TODO: HACK: Also limit the results for some presidential fields that
      // are unused
      case 'USP':
      case 'USVP':
        break

      default:
        contestId = result.attributes.Contest_ID
      }

      if (contestId) {
        contestIds.push(contestId)
      }
    })

    return contestIds
  })
}

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

function getStatewideBallot() {
  return getAllContestIds().then(contestIds => {
    const contestsWithCandidatesPr = getCandidatesMappedIntoContests(contestIds)
    return contestsWithCandidatesPr.then(contests => {
      const ballot = {
        contests,
        amendments: [],
      }
      return ballot
    })
  })
}

module.exports = {
  getBallot,
  getStatewideBallot,
}
