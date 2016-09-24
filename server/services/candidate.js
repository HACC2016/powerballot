"use strict"
const Candidate = require('../models/candidate')
const CandidateMetadata = require('../models/candidate_metadata')

const CANDIDATE_ID = 'Candidate_ID'

function getCandidatesForContests(contestIds) {
  return Candidate
    .query(function(qb) {
      qb.whereIn('Contest_ID', contestIds)
    })
    .orderBy(CANDIDATE_ID, 'ASC')
    .fetchAll()
    .then(results => {
      let candidates = results.map(candidateModel => {
        return candidateModel.attributes
      })
      return candidates
    })
}

function getCandidate(candidateId) {
  return Candidate
    .where(CANDIDATE_ID, candidateId)
    .fetch()
    .then(candidate => {
      return candidate.attributes
    })
}

function getCandidateMetadata(candidateId) {
  return getCandidatesMetadata([candidateId]).then(candidatesMetadata => {
    if (candidatesMetadata && candidatesMetadata.length > 0) {
      return candidatesMetadata[0]
    }
    else {
      return {}
    }
  })
}

function getCandidatesMetadata(candidateIds) {
  return CandidateMetadata
    .query(function(qb) {
      qb.whereIn(CANDIDATE_ID, candidateIds)
    })
    .orderBy(CANDIDATE_ID, 'ASC')
    .fetchAll()
    .then(results => {
      let candidatesMetadata = results.map(candidateMetadataModel => {
        return candidateMetadataModel.attributes
      })
      return candidatesMetadata
    })
}

function getFullCandidatePromise(candidateId) {
  const candidatePr = getCandidate(candidateId)
  const candidateMetadataPr = getCandidateMetadata(candidateId)
  return Promise.all([candidatePr, candidateMetadataPr])
    .then(results => {
      let fullCandidate = results[0] || {}
      fullCandidate.metadata = results[1] || {}
      return fullCandidate
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

module.exports = {
  getCandidatesMetadata,
  getCandidatesForContests,
  getFullCandidatePromise,
  setCandidateMetadata,
}
