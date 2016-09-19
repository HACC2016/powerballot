function scriptUrl () {
  var scriptFile = 'bundle.js'
  var assetPath = '/static/'
  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line import/no-unresolved
    var assets = require('../../dist/stats.json')
    scriptFile = assets.assetsByChunkName.main.filter((filename) => {
      console.log('filename!', filename)
      return filename.endsWith('.js')
    })[0]
  }

  return assetPath + scriptFile
}

module.exports = {
  scriptUrl,
}
