var express = require('express')
var queryString = require('query-string')
var router = express.Router()

const {scriptUrl} = require('../services/server_helpers')
const {getBallot} = require('../services/ballot')

router.get('/:precinct', function (req, res) {
  const precinct = req.params.precinct
  console.log('precinct', precinct)
  const ballotPr = getBallot(precinct)

  var result = ballotPr.then(data => {
    // console.log('server ballot data', JSON.stringify(data, null, 2))

    return {
      ballot: data,
    }
  },
  failure => {
    console.error('Unable to get candidates data')
    console.error(failure)
    return { ballot: {}, candidates: []}
  })

  result.then(data => {
    const initialState = {
      ballot: data.ballot,
      precinct,
    }

    res.render('index.jade', {
      initialState,
      scriptUrl: scriptUrl(),
    })
  }).catch((reason) => {
    console.error('ERROR: unable to render', reason)
    res.status(500).send('Unable to render ' + reason)
  })
})

module.exports = router
