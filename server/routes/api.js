var express = require('express')
var queryString = require('query-string')
var router = express.Router()

const {getBallot, getStatewideBallot} = require('../services/ballot')

router.get('/precincts/:precinct', function (req, res) {
  const precinct = req.params.precinct

  getBallot(precinct).then(data => {
    res.json({ballot: data})
  },
  failure => {
    console.error('Unable to get candidates data')
    console.error(failure)
    return { ballot: {}, candidates: []}
  })
})

router.get('/statewide', function (req, res) {
  getStatewideBallot().then(data => {
    res.json({ballot: data})
  },
  failure => {
    console.error('Unable to get statewide ballot')
    console.error(failure)
    return { ballot: {}, candidates: []}
  })
})

module.exports = router
