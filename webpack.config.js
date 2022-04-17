const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  mode: 'production',
  entry: './src/index.js', 
  output: { 
    path: path.resolve(__dirname, './docs'),
    filename: '[name].bundle.js',
    clean: true
  },
  performance: {
    hints: false
  },
  module: { 
    rules: [ 
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }, 
  plugins: [HtmlWebpackPluginConfig]
}