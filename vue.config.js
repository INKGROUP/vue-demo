const { resolve } = require('path')

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo'
    : '/',
  configureWebpack: {
    // 这里的优化配置参考webpack的配置
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'all'
          },
          vendor: {
            test: /[\\/node_modules[\\/]]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      //
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@js', resolve('src/assets/js'))
      .set('@images', resolve('src/assets/images'))
      .set('@style', resolve('src/assets/style'))
      .set('@fonts', resolve('src/assets/fonts'))
  },
  devServer: {
    open: true,
    port: 9999,
    https: false,
    host: '0.0.0.0'
  }
}
