const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, ""),
    filename: 'index.min.js',
    library: "__FUNC",
  },
  resolve: {
    extensions: ['.js']
  },
  module: {},
  externals: ['axios']
};