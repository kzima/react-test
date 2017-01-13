const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const config = {
  entry: {
    'app' : [path.join(__dirname, '/src/app.js')],
  },
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    // Path of the output file
    path: buildPath, 
    // this is a physical path for our compiled bundle file
    filename: "[name].bundle.js",
    // this is what we will reference in index.html (served by our server)
    publicPath: "/build/",
    // shared modules
    // chunkFilename: "[id].chunk.js"
  },
  plugins: [
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // supresses warnings, usually from module minification
        warnings: false,
      },
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // allows to put shared code between multiple entry points into a seperate file
    // new CommonsChunkPlugin({
    //     filename: "commons.js",
    //     name: "commons"
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: [nodeModulesPath],
      }
    ],
  },
};

module.exports = config;
