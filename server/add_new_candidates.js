const superagent = require('superagent')

const Candidate = require('./models/candidate')
const CANDIDATE_ID = 'Candidate_ID'

const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/5/query'

const result = superagent.get(baseUrl)
.query({
  where: "1=1",
  outFields: '*',
  f: 'pjson',
})

function addCandidate(candidateId, candidate) {
  return Candidate
    .forge({ [CANDIDATE_ID]: candidateId })
    .fetch()
    .then(foundCandidate => {
      if (foundCandidate === null) {
        return Candidate
          .forge({ [CANDIDATE_ID]: candidateId})
          .save(candidate, {method: 'insert'})
          .then(savedModel => {
            console.log('Added new candidate', savedModel)
            return savedModel
          })
      }
    })
}

return result.then((data) => {
  const candidates = JSON.parse(data.text).features
  candidates.map (data => {
    const candidate = data.attributes
    console.log('on ', candidate.Candidate_Name)
    delete candidate.OBJECTID

    const candidateId = candidate.Candidate_ID

    addCandidate(candidateId, candidate)
  })
})
