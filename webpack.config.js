const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: "[name].js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: __dirname + '/public',
        to: __dirname + '/dist',
        toType: 'dir'
      }
    ], {debug:'debug'})
  ]
}
