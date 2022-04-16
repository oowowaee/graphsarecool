const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

//  mode: 'production',

module.exports = {
  mode: 'production',
  entry: './src/index.js', 
  output: { 
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  performance: {
    hints: false
  },
  module: { 
    rules: [ 
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }, 
  plugins: [HtmlWebpackPluginConfig]
}