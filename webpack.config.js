const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};