var config = require('./webpack.config.js')

var path = require('path')
var webpack = require('webpack')

config.debug = false
config.devtool = 'source-map'

config.output.filename = '[name].[hash].bundle.js'
config.output.publicPath = process.env.ASSET_HOST + '/static/'

config.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  sourceMap: true,
  compress: { warnings: false },
}))

module.exports = config
