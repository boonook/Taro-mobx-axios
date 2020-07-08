const isH5 = process.env.CLIENT_ENV === 'h5';
const HOST = '"http://192.168.50.169:3003"';
const HOST_M = '"http://192.168.50.169:3003"';
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    HOST:HOST,
    HOST_M: HOST_M
  },
  weapp: {
    HOST:HOST,
    HOST_M: HOST_M
  },
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
