"use strict"

const PollingPlace = require('../models/polling_place')

const POLLING_ID = 'POLLINGID'

function getPollingPlace(pollingId) {
  return PollingPlace
    .where(POLLING_ID, pollingId)
    .fetch()
    .then(pollingPlace => {
      return pollingPlace.attributes
    })
}

module.exports = {
  getPollingPlace,
}
