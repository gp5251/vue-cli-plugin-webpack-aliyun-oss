const path = require('path');
const WebpackAliyunOss = require("webpack-aliyun-oss");

module.exports = (api, {outputDir}) => {
	api.chainWebpack(webpackConfig => {
		const context = process.env.VUE_CLI_CONTEXT || process.cwd();
		const config = getConfig(context, outputDir);
		webpackConfig.plugin("webpack-aliyun-oss").use(WebpackAliyunOss, [config]);
	});

	api.registerCommand("upload", ({from = outputDir}) => {
		const context = process.env.VUE_CLI_CONTEXT || process.cwd();
		const config = getConfig(context, from);
		new WebpackAliyunOss(config).apply();
	});
};

function getConfig (context, outputDir) {
	const config = require(path.resolve(context, '.config.js'));
	const defaults = {
		from: outputDir + '/**',
		dist: '/tmp',
		buildRoot: outputDir
	}
	return Object.assign(defaults, config);
}

module.exports.defaultModes = {
	upload: "production"
};
