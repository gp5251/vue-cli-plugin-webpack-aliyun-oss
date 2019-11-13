const path = require('path');
const WebpackAliyunOss = require("webpack-aliyun-oss");

module.exports = (api, options) => {
	api.chainWebpack(webpackConfig => {
		const context = process.env.VUE_CLI_CONTEXT || process.cwd();
		const config = require(path.resolve(context, '.config.js'));

		webpackConfig.plugin("webpack-aliyun-oss").use(WebpackAliyunOss, [{
			from: options.outputDir + '/**',
			dist: config.dist || "/tmp",
			region: config.region,
			accessKeyId: config.accessKeyId,
			accessKeySecret: config.accessKeySecret,
			bucket: config.bucket
		}]);
	});

	api.registerCommand("upload", args => {
		const context = process.env.VUE_CLI_CONTEXT || process.cwd();
		const config = require(path.resolve(context, '.config.js'));

		new WebpackAliyunOss({
			from: options.outputDir + '/**',
			dist: config.dist || "/tmp",
			buildRoot: options.outputDir,
			region: config.region,
			accessKeyId: config.accessKeyId,
			accessKeySecret: config.accessKeySecret,
			bucket: config.bucket
		}).apply();
	});
};

module.exports.defaultModes = {
	upload: "production"
};
