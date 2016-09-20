var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var WebpackNotifierPlugin = require('webpack-notifier')

var port = 3000

config.plugins.push(WebpackNotifierPlugin)

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only',
  proxy: {
    '*': {
      target: 'http://localhost:4000',
      secure: false,
    },
  },
}).listen(port, 'localhost', function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://localhost:3000/')
})
