npx // 可以用来执行依赖包里的二进制文件， npm version >= 5.2.0支持使用
比如：npx webpack
npx webpack --config webpack1.config.js  // 可以用来指定使用的配置文件

npm run build // 执行package.json文件中script指定的脚本
npm run build -- --<参数> // 通过在 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给webpack
比如：npm run build -- --config webpack1.config.js 或者 npm run build --config webpack1.config.js


2019.7.9
publicPath：对页面中引入的资源路径进行补全。
比如：css文件中引入了一个图片，打包后，图片资源被放入了dist目录下，但是引用的时候路径缺少‘dist’（如图css_url.png），
所有页面会找不到图片资源。在output对象里添加publicPath属性，对资源路劲进行补全（如图：css_url_publicPath.png）。

2019.7.10
url-loader：option对象下的limit属性表示，如果图片文件大小低于limit限制的大小（字节），则将图片转成base64
格式的dataRUL（如图base64.png）。大于limit限制大小的图片文件，则以file-loader的方式进行加载。

file-loader：option下的name属性可以设置打包后文件存放的地址及文件名。
比如：{
      loader: 'file-loader',
      options: {
          limit: 8192,
          name: 'image/[name].[ext]'
      }
    }
生成的文件地址在/image目录下，文件名为打包前的文件名
options: {
          name: '[path][name].[ext]',
        }
[path]: 以打包前文件的路径为模板，生成相同的路径结构在output设置的目录下。
[name]: 默认是打包前的文件名。

2019.8.7
tree-shaking是指优化程序冗余代码，使用tree-shaking注意事件：
1、使用es2015模块语法（即import、export）；
2、确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块（这也是流行的 Babel preset 中 @babel/preset-env 的默认行为）；
（
    modules：
    "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto".
    Enable transformation of ES6 module syntax to another module type.

    Setting this to false will not transform modules.
  ）
3、通过将 mode 选项设置为 production（会移除项目中没有引用过的exports方法）。

2019.8.11
代码分离的三种常用方法：
1、使用entry配置手动分离代码：比如将main bundle中引用的文件单独放在entry入口中配置， entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  }

2、防止重复，利用插件抽离公共代码，可以使用optimization.splitChunks，参考链接：https://juejin.im/post/5af1677c6fb9a07ab508dabb

3、动态导入。动态导入的方法有import语法和require.ensure方法。

2019.8.12
缓存插件：namedModulesPlugin和hashedModulesPlugin。