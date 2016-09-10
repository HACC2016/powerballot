const superagent = require('superagent');

const Candidate = require('../models/candidate')

const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/5/query'

const result = superagent.get(baseUrl)
.query({
  where: "1=1",
  outFields: '*',
  f: 'pjson',
})

return result.then((data) => {
  const candidates = JSON.parse(data.text).features
  candidates.map (data => {
    const candidate = data.attributes
    console.log('on ', candidate.Candidate_Name)
    delete candidate.OBJECTID
    new Candidate(candidate).save()
  })
})
