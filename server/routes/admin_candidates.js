var express = require('express')
var queryString = require('query-string')
var router = express.Router()

const { getFullCandidatePromise } = require('../services/candidate')

router.get('/:candidateId', function (req, res) {
  const candidateId = req.params.candidateId
  console.log('candidateId', candidateId)

  const candidatePr = getFullCandidatePromise(candidateId)

  var result = candidatePr.then(data => {
    return {
      candidate: data,
    }
  },
  failure => {
    console.error('Unable to get candidates data')
    console.error(failure)
    return { candidate: {} }
  })

  result.then(data => {
    const initialState = {
      candidate: data.candidate,
    }

    res.render('index.jade', {
      initialState,
    })
  })
})

module.exports = router
