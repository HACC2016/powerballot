var express = require('express')
var router = express.Router()

const {scriptUrl} = require('../services/server_helpers')
const {
  getCandidateById,
  getFullCandidatePromise,
  setCandidateMetadata,
} = require('../services/candidate')

router.get('/id/:id', function (req, res) {
  getCandidateById(req.params.id).then(candidate => {
    return res.redirect(`/admin/candidate/${candidate.Candidate_ID}`)
  })
})

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
      scriptUrl: scriptUrl(),
    })
  })
})

router.put('/:candidateId', function (req, res) {
  const candidateId = req.params.candidateId

  const candidatePr = setCandidateMetadata(candidateId, req.body)

  var result = candidatePr.then(data => {
    return {
      candidate: data,
    }
  },
  failure => {
    console.error('Unable to set candidates data')
    console.error(failure)
    return { candidate: {} }
  })

  result.then(data => {
    const initialState = {
      candidate: data.candidate,
    }

    res.render('index.jade', {
      initialState,
      scriptUrl: scriptUrl(),
    })
  })
})

module.exports = router
