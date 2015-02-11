var bourbon = require('node-bourbon');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
  entry: './modules/main.js',
  output: {
    filename: 'bundle.js'
  },
  debug: true,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?includePaths[]=' + bourbon.includePaths[0] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [new BowerWebpackPlugin()]
};
