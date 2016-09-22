const SuperAgent = require('superagent')

function getPowerBallot() {
  // HI2016G_PowerBallot_HACC
  const baseUrl = 'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_PowerBallot/FeatureServer/0/query'

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
  const baseUrl = 'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/5/query'
  // const baseUrl = 'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_PowerBallot/FeatureServer/0/query'
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
  const baseUrl = 'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'

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
  const baseUrl = 'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'

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

function getAllContests() {
  // HI2016G_Precincts_HACC
  const baseUrl = 'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/2/query'

  const result = SuperAgent.get(baseUrl)
  .query({
    where: "1=1",
    outFields: '*',
    orderByFields: 'Contest_Order',
    f: 'pjson',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

function getContests(ids) {
  // HI2016G_Precincts_HACC
  const baseUrl = 'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/2/query'

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

// Get the "esri" coordinates for an address
function geocodeAddress (address) {
  const baseUrl = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates'

  const result = SuperAgent.get(baseUrl)
  .query({
    SingleLine: address,
    // Might need to change formatting
    // inSR: { wkid: 4326 }????
    outSR: { wkid: 102100 },
    outFields: 'Match_addr,stAddr,City',
    // TOO: add auto suggest to get a magicKey
    // &magicKey=GST7YMc0AM9UOsE3GY8tIS9GOghnYnwZIip_GQypG1c915KHUTFOYNaHUTBtQNcpOh9bZgKZQoc3YSyaagDIZhkZQsxKQN4mDb8uAgTvDM8F
    maxLocations: 3,
    f: 'json',
  })

  return result.then((data) => {
    return JSON.parse(data.text)
  })
}

// Use the precinct service to lookup an address based on "esri" coordinates
function lookupPrecinct (coordinates, spatialReference) {
  const baseUrl =  'https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'

  const result = SuperAgent.get(baseUrl)
  .query({
    where: '1=1',
    geometry: `${coordinates.x},${coordinates.y}`,
    geometryType: 'esriGeometryPoint',
    returnGeometry: false,
    inSR: spatialReference,
    outFields: '*',
    f: 'json',
  })

  return result.then((data) => {
    return JSON.parse(data.text).features
  })
}

module.exports = {
  geocodeAddress,
  getPrecinct,
  getAllContests,
  getContests,
  lookupPrecinct,
}
