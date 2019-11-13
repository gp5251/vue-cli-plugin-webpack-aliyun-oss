# vue-cli-plugin-webpack-aliyun-oss

vue cli plugin to upload your assets to aliyun oss

一个vue-cli插件，可以将静态文件上传到aliyun oss。



### 安装

```sh
vue add webpack-aliyun-oss
```



### 使用

执行上面代码后，终端会问你要输入 `accessKeyId`, `accessKeySecret`, `region` and  `bucket`. 这些会被用来配置你的阿里云oss，并写入到你项目跟目录下的.config.js文件。你也可以在完成配置后随时修改这个文件。



.confgi.js 文件看起来是这样:

```js
module.exports = {
    region: 'region',
    accessKeyId: 'accessKeyId',
    accessKeySecret: 'accessKeySecret',
    bucket: 'bucket',
	  dist: '/tmp', 				// oss上传路径，默认为 /tmp
  	from: '', 						// 默认为 vue.config.js outputDir 下的所有文件
  	buildRoot: '', 				// 默认与 vue.config.js outputDir 一致，如果设置setOssPath，此项可忽略
  	setOssPath(filePath){
      // 如果需要为每个文件单独设置上传路径可配置
      // filePath为当前文件路径，函数应该返回路径+文件名，如/new/path/to/file.js，则最终上传路径为 /tmp/new/path/to/file.js，其中/tmp来自于dist
      return /new/path/to/file.js
    },
  	setHeaders(filePath) {
      // some operations to filePath
      return {
        'Cache-Control': 'max-age=31536000'
      }
    }，
  	test: false 					// 仅仅显示上传文件，不做上传操作
}
```



如果已经完成构建，随时可以上传，可以使用插件注册的 upload 命令

```sh
npm run upload
# or
yarn run upload
```

