const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'build', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html.ejs',
    favicon: path.join(__dirname, 'public', 'favicon.png'),
  })],
};
