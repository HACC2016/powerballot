// Note to run this you may need to run: npm install polyfiller --save
var fs = require('fs')
var Polyfiller = require('polyfiller')

// Polyfiller setup
var polyfiller = new Polyfiller
var ieList = polyfiller.find(['String.prototype.startsWith', 'Promise'])
var promiseList = polyfiller.find(['Promise'])

fs.writeFile('./src/assets/js/polyfill-ie.js', polyfiller.pack(ieList))
fs.writeFile('./src/assets/js/polyfill-promise.js', polyfiller.pack(promiseList))
