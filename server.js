var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const {scriptUrl} = require('./server/services/server_helpers')
var ballotsRoute = require('./server/routes/ballots')
var candidatesRoute = require('./server/routes/admin_candidates')
var apiRoute = require('./server/routes/api')

var app = express()

var port = process.env.PORT || 4000

app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')
app.set('views', './server/views')

app.use('/static/', express.static(path.join(__dirname, '/dist')))
app.use('/assets/', express.static(path.join(__dirname, '/src/assets')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', apiRoute)
app.use('/ballot', ballotsRoute)
app.use('/admin/candidate', candidatesRoute)

app.get('*', function (req, res) {
  res.render('index.jade', {
    scriptUrl: scriptUrl(),
  })
})

app.listen(port, function () {
  console.log('Express listening on ', port)
})
