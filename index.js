const path = require('path');
const WebpackAliyunOss = require("webpack-aliyun-oss");

module.exports = (api, options) => {
	api.chainWebpack(webpackConfig => {
		const context = process.env.VUE_CLI_CONTEXT || process.cwd();
		const config = getConfig(context, options.outputDir);
		webpackConfig.plugin("webpack-aliyun-oss").use(WebpackAliyunOss, [config]);
	});

	api.registerCommand("upload", args => {
		const context = process.env.VUE_CLI_CONTEXT || process.cwd();
		const config = getConfig(context, options.outputDir);
		new WebpackAliyunOss(config).apply();
	});
};

function getConfig (context, outputDir = 'dist') {
	const config = require(path.resolve(context, '.config.js'));
	const defaults = {
		from: outputDir + '/**',
		dist: '',
		buildRoot: outputDir,
		region: '',
		accessKeyId: '',
		accessKeySecret: '',
		bucket: ''
	}

	return Object.assign({}, defaults, config);
}

module.exports.defaultModes = {
	upload: "production"
};
