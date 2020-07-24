module.exports = {
  publicPath:'./',            // 公共,基本路径
  
  // 输出文件目录，不同的环境打不同包名
  outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', 
  assetsDir: 'static',        // 默认会在目录同时生成三个静态目录：js,css,img
  lintOnSave: false,          // 关闭eslint代码检查
  filenameHashing: false,     // 生成的静态资源名, 默认加了hash, 命名.后面的为hash：chunk-2d0aecf8.71e621e9
  productionSourceMap:false,  // 生产环境下css 分离文件, sourceMap 文件
  chainWebpack: config => {
	  const svgRule = config.module.rule('svg')
	  // 清除已有的所有 loader,如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
	  svgRule.uses.clear()
	  // 添加要替换的 loader
	  svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
	  .options({
		  symbolId: 'icon-[name]'
	  })
  },
  css: {   
      extract: false,      // 是否使用css分离插件 ExtractTextPlugin
      sourceMap: false,   // 开启 CSS source maps        
      modules: false,     // 启用 CSS modules for all css / pre-processor files.
      // css 预设器配置项
      loaderOptions: {
          sass: {
              prependData: `@import "./src/assets/hotcss/px2rem.scss";`,
			  prependData: `@import "./src/styles/main.scss";`
          }
      }
  },
  devServer: {
      port:8089,
      host: "localhost",   // 0.0.0.0
      open: false,          // 配置自动启动浏览器
      https: false, 
      hotOnly: false,
	  hot:true,
      overlay: {
          warnings: true,
          errors: true
      },
      //  配置代理,解决跨域的问题, 只有一个代理
      // proxy: null,
      // proxy: 'http://api.mc.com',
      
     proxy: {
     	"/api": {
     		target: "http://localhost:3000", // 要访问的接口域名
     		ws: true, // 是否启用websockets
     		changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
     		pathRewrite: {
     			'^/api': '' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
     		}
     	}
     },
     before: app => {},     // 第三方插件
  }
}