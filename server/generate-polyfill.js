// Note to run this you may need to run: npm install polyfiller --save
var fs = require('fs')
var Polyfiller = require('polyfiller')

// Polyfiller setup
var polyfiller = new Polyfiller
var list = polyfiller.find(['String.prototype.startsWith'])

fs.writeFile('./src/assets/js/polyfills.js', polyfiller.pack(list))
