const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader', options: { presets: [ 'es2015' ] } }
        ]
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api/*': {
        target: 'http://server:5000',
        pathRewrite: { '^/api' : '' }
      }
    }
  }
};
