const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production' ?
  '/' :
  '/'

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: BASE_URL,
  // Type: string Default: 'dist'
  outputDir: 'dist',
  // Type: string Default: ''
  assetsDir: '',
  // Type: string Default: 'index.html'
  indexPath: 'index.html',
  // Type: boolean
  filenameHashing: true,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  // boolean | 'warning' | 'default' | 'error'
  lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  // Type: boolean Default: false
  runtimeCompiler: false,
  pages: {
    index: {
      entry: 'examples/main.js',
    }
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 第三方插件
  pluginOptions: {
  },
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('examples/components'))
      .set('@lib', resolve('lib'))
  },
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 8082,
    proxy: {
      '/api': {
        target: 'http://192.168.0.8:8080/',
        changeOrigin: true,
        pathRewrite: { '^/api': '/v1' }
      },
      '/upload': {
        target: 'http://192.168.0.8:8080/',
        changeOrigin: true,
        pathRewrite: { '^/upload': '/upload/' }
      }
    }

  }
}