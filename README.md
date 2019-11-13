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
  dist: '/tmp', 				// oss上传路径,如果没有可以手动加,默认为 /tmp
}
```



如果已经构建完成要直接上传，可以使用插件注册的 upload 命令

```sh
npm run upload
# or
yarn run upload
```

