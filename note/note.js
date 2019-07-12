npx // 可以用来执行依赖包里的二进制文件， npm version >= 5.2.0支持使用
比如：npx webpack
npx webpack --config webpack1.config.js  // 可以用来指定使用的配置文件

npm run build // 执行package.json文件中script指定的脚本
npm run build -- --<参数> // 通过在 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给webpack
比如：npm run build -- --config webpack1.config.js


2019.7.9
publicPath：对页面中引入的资源路径进行补全。
比如：css文件中引入了一个图片，打包后，图片资源被放入了dist目录下，但是引用的时候路径缺少‘dist’（如图css_url.png），
所有页面会找不到图片资源。在output对象里添加publicPath属性，对资源路劲进行补全（如图：css_url_publicPath.png）。

2019.7.10
url-loader：option对象下的limit属性表示，如果图片文件大小低于limit限制的大小（字节），则将图片转成base64
格式的dataRUL（如图base64.png）。大于limit限制大小的图片文件，则以file-loader的方式进行加载。