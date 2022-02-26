const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, "../dist")
  }
}