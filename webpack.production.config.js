var config = require('./webpack.config.js')

var webpack = require('webpack')
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

config.debug = false
config.devtool = 'source-map'

config.entry = [
  './src/index_production',
]

config.output.filename = '[name].[hash].bundle.js'
config.output.publicPath = process.env.ASSET_HOST + '/static/'

config.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  sourceMap: true,
  compress: { warnings: false },
}))
// Needed to get the path to statically compiled js
config.plugins.push(new StatsWriterPlugin())

// Try to fix compiling react in production mode
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production'),
  },
}))

module.exports = config
