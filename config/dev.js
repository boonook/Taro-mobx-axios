// NOTE H5 端使用 devServer 实现跨域，需要修改 package.json 的运行命令，加入环境变量
const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = '"http://192.168.50.169:3003"';
const HOST_M = '"http://192.168.50.169:3003"';
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST:HOST,
    HOST_M: HOST_M
  },
  weapp: {
    HOST:HOST,
    HOST_M:HOST_M
  },
  h5: {}
}
