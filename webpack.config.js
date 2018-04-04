var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: './client/app.js',
  out: './public',
  clearBeforeBuild: true,
  devServer: {
    port: process.env.PORT || 3000,
    hostname: process.env.IP || 'localhost',
    hot: true
  }
})
