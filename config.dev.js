const webpackMerge = require('webpack-merge')

const commonConfig = require('./config.base.js')

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
  })
}
