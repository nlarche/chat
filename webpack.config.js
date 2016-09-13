var path = require('path');

var srcPath = path.resolve(__dirname, 'src');

var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname,
  entry: {
    bundle: ['./src/index.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath,
      }
    ],
    loaders: [
      { test: /\.js$/, include: srcPath, loader: "babel-loader" },
      { test: /\.html$/, exclude: /node_modules/, loader: "raw-loader" },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
      }
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  devtool: 'source-map',
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 3000
  }
};
