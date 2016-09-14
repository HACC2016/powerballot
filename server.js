var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var ballotsRoute = require('./server/routes/ballots')

var app = express()

var port = process.env.PORT || 4000

app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')
app.set('views', './server/views')

app.use('/static/', express.static(path.join(__dirname, '/dist')))
app.use('/assets/', express.static(path.join(__dirname, '/src/assets')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/ballot', ballotsRoute)
app.get('/ballot/:precinct', function (req, res) {
  console.log('precinct', req.params.precinct)
  res.render('index.jade')
})

app.get('*', function (req, res) {
  res.render('index.jade')
})

app.listen(port, function () {
  console.log('Express listening on ', port)
})
