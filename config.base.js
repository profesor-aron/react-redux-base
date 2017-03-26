const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')

module.exports = function (env) {
  return {
    context: path.resolve(__dirname, './src'),
    entry: {
      app: './index.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      historyApiFallback: true,
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              'es2015',
              'react'
            ],
            plugins: [
              'transform-es2015-destructuring',
              'transform-object-rest-spread',
              'transform-flow-comments'
            ]
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname),
        verbose: true,
        dry: false,
        exclude: ['index.html']
      }),
      new FlowBabelWebpackPlugin()
    ]
  }
}
