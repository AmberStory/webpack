const path = require('path');

module.exports = {
  entry: {
    app: './src/output-management/index.js',
    print: './src/output-management/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}