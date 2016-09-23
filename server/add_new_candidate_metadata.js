'use strict'

const superagent = require('superagent')

const CandidateMetadata = require('./models/candidate_metadata')

const CANDIDATE_ID = 'Candidate_ID'

const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_PowerBallot/FeatureServer/1/query'

const result = superagent.get(baseUrl)
.query({
  where: "1=1",
  outFields: '*',
  f: 'pjson',
})

function addCandidateMetadata(candidateId, metadata) {
  return CandidateMetadata
    .forge({ [CANDIDATE_ID]: candidateId })
    .fetch()
    .then(foundMetadata => {
      if (foundMetadata === null) {
        return CandidateMetadata
          .forge({ [CANDIDATE_ID]: candidateId})
          .save(metadata, {method: 'insert'})
          .then(savedModel => {
            console.log('Added new metadata', savedModel)
            return savedModel
          })
      }
    })
}

return result.then((data) => {
  const candidates = JSON.parse(data.text).features
  candidates.map (data => {
    const candidate = data.attributes
    console.log('on ', candidate.ballot_name)
    delete candidate.OBJECTID

    const candidateId = candidate.Candidate_ID

    addCandidateMetadata(candidateId, candidate)
  })
})
