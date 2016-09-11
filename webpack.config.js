// var path = require('path')

export default (webpackConfig) => {

  // Load css from node_modules
  webpackConfig.module.loaders.push({
    test: /\.css$/,
    loaders: [
      'style',
      'css',
    ],
  })

  // Svg loader, use .svgg to not conflict with the already existing loader...
  webpackConfig.module.loaders.push({
    test: /\.svgg$/,
    loader: 'svg-sprite?' + JSON.stringify({
      name: '[name]_[hash]',
      prefixize: true,
    }),
  })

  return webpackConfig
}
