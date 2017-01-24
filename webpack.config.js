var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: [ // Load webpac-dev-server and webpack modules. Load index.js as entry point.
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/, // Locate files with .js extension (JavaScript files)
        exclude: /node_modules/,
        loader: 'react-hot!babel' // Use babel first, then react-hot. Babel used due to ES6 syntax.
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
        
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/public', // Location for the built files
    publicPath: '/',
    filename: 'bundle.js' // Name of the JS bundle file
  },
  devServer: {
    contentBase: './public', // Target directory of the build code
    hot: true // Enable hot loader
  }
};