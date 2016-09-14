const SuperAgent = require('superagent')

function getPowerBallot() {
  // HI2016G_PowerBallot_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_PowerBallot/FeatureServer/0/query'
  console.log('service!')

  const result = SuperAgent.get(baseUrl)
  .query({
    where: "1=1",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

function getCandidates() {
  // HI2016G_PowerBallot_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/5/query'
  // const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_PowerBallot/FeatureServer/0/query'
  console.log('service!')

  const result = SuperAgent.get(baseUrl)
  .query({
    where: "1=1",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

function getPrecincts() {
  // HI2016G_Precincts_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'

  const result = SuperAgent.get(baseUrl)
  .query({
    where: "1=1",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

function getPrecinct(dp) {
  // HI2016G_Precincts_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'

  const result = SuperAgent.get(baseUrl)
  .query({
    where: "DP='"+ dp + "'",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

function getContests(ids) {
  // HI2016G_Precincts_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/2/query'

  const idsString = ids.map(id => {return "'" + id + "'"}).join(',')

  console.log('idsString', idsString)

  const result = SuperAgent.get(baseUrl)
  .query({
    where: "Contest_ID in (" + idsString + ")",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

module.exports = {
  getPrecinct,
  getContests,
}
