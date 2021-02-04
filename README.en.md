# vue-cli-plugin-webpack-aliyun-oss

vue cli plugin to upload your assets to aliyun oss



### Installation

```sh
vue add webpack-aliyun-oss
```



### Usage

After running the command above, the terminal will ask you to input your `accessKeyId`, `accessKeySecret`, `region` and  `bucket`. these data can be used to config your aliyun oss and will be written into .config.js in your project root. and also you can edit them manually at any time.

The plug-in supports all configuration parameters of [webpack-aliyun-oss](https://www.npmjs.com/package/webpack-aliyun-oss), only the necessary parameters are shown here. For example, you can add `from` to customize the upload range, modify `test` to true to only display the upload log, etc.


a .config.js file will look like this:

```js
module.exports = {
	region: 'c',
	accessKeyId: 'a',
	accessKeySecret: 'b',
	bucket: 'd',
	dist: '/test',
	buildRoot: './dist',
	test: true
}
```


If you just want to upload the assets which are already generated, you can just run

```sh
npm run upload
# or
yarn run upload
```

