const { resolve } = require('path')

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo'
    : '/',
  configureWebpack: {

  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@js', resolve('src/assets/js'))
      .set('@images', resolve('src/assets/images'))
      .set('@style', resolve('src/assets/style'))
      .set('@fonts', resolve('src/assets/fonts'))
  }
}
