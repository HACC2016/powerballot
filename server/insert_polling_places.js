'use strict'

const superagent = require('superagent')

const PollingPlace = require('./models/polling_place')

const CANDIDATE_ID = 'Candidate_ID'

const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/0/query'

const result = superagent.get(baseUrl)
.query({
  where: "1=1",
  outFields: '*',
  f: 'pjson',
})

return result.then((data) => {
  const pollingPlaces = JSON.parse(data.text).features
  pollingPlaces.map (data => {
    console.log(data)
    const pollingPlace = data.attributes
    console.log('on ', pollingPlace.POLLINGID)

    delete pollingPlace.OBJECTID
    new PollingPlace(pollingPlace).save()
  })
})
