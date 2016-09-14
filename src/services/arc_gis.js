import {ReactServerAgent} from 'react-server'

export function getPowerBallot() {
  // HI2016G_PowerBallot_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_PowerBallot/FeatureServer/0/query'
  console.log('service!')

  const result = ReactServerAgent.get(baseUrl)
  .query({
    where: "1=1",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

export function getCandidates() {
  // HI2016G_PowerBallot_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/5/query'
  // const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_PowerBallot/FeatureServer/0/query'
  console.log('service!')

  const result = ReactServerAgent.get(baseUrl)
  .query({
    where: "1=1",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

export function getPrecincts() {
  // HI2016G_Precincts_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'

  const result = ReactServerAgent.get(baseUrl)
  .query({
    where: "1=1",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

export function getPrecinct(dp) {
  // HI2016G_Precincts_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'

  const result = ReactServerAgent.get(baseUrl)
  .query({
    where: "DP='"+ dp + "'",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

export function getContests(ids) {
  // HI2016G_Precincts_HACC
  const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/2/query'

  const idsString = ids.map(id => {return "'" + id + "'"}).join(',')

  console.log('idsString', idsString)

  const result = ReactServerAgent.get(baseUrl)
  .query({
    where: "Contest_ID in (" + idsString + ")",
    outFields: '*',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}
