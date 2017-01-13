const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const config = {
  // Entry points to the project
  entry: {
    'app': ['webpack/hot/dev-server', path.join(__dirname, '/src/app.js')],
  },
  // Server Configuration options
  devServer: {
    contentBase: '', // Relative directory for base of server,
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3006, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    // Path of the output file
    path: buildPath,
    // this is a physical path for our compiled bundle file
    filename: "[name].bundle.js",
    // this is what we will reference in index.html (served by our server)
    publicPath: "/build/",
  // shared modules
  // chunkFilename: "[id].chunk.js"
  // source maps
  // sourceMapFilename: "[name].js",
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
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
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
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
