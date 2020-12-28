
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const CompressionPlugin = require("compression-webpack-plugin");
let { version, openGzip } = require('./package.json');
version = version.replace(/\./g, '_');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path');

module.exports = {
  // 这样表示相对路径， 可以部署在任意路径下，如果为 / 则只能在nginx的html的根路径下面，如果指定为/app/ ，则可以部署在/app下面，默认为/
  publicPath: '/',

  // 构建输出目录
  outputDir: 'dist',

  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets',

  //关闭生成map文件
  productionSourceMap: false,

  //指定打包目录
  outputDir: process.env.outputDir,

  //远程访问配置
  devServer: {
    // netApp外网穿透使用
    // disableHostCheck: true,
    // 跨域配置
    // proxy: {
    //   '/api': {
    //     target: '',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },

  //css 配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*', '!font*'],// !不匹配属性（这里是字体相关属性不转换）
            unitPrecision: 3,        // 最小精度，小数点位数
            minPixelValue: 2          // 替换的最小像素值
          })
        ]
      }
    }
  },

  //webpack 配置
  configureWebpack: (config) => {
    // 打包体积优化
    if (process.env.VUE_APP_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      //去除打印日志
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      // 将每个依赖包打包成单独的js文件
      config.optimization.runtimeChunk = 'single'
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000, // 依赖包超过20000bit将被单独打包
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            }
          }
        }
      }
      // Gzip 压缩
      if (openGzip) {
        config.plugins = [
          ...config.plugins,
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240,//对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      }
      //预渲染
      config.plugins = [
        ...config.plugins,
        new PrerenderSPAPlugin({
          // 生成文件的路径，这个目录只能有一级。若目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动
          staticDir: path.join(__dirname, process.env.outputDir) ,
          // 对应自己的路由文件
          routes: ['/'],
          // 若没有这段则不会进行预编译
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event'
          })
        }),
      ]
      // 配置打包js增加版本号，避免缓存导致显示不更新
      config.output = {
        ...config.output,
        filename: `assets/js/[name].[chunkhash].${version}.js`,
        chunkFilename: `assets/js/[name].[chunkhash].${version}.js`
      }
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  }
}