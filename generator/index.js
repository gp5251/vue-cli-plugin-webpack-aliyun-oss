const fs = require('fs');
const path = require('path');

function getOutputPath(context) {
	let outputPath = './dist';
	let userConfigPath = path.resolve(context, 'vue.config.js');

	if (fs.existsSync(userConfigPath)) {
		try {
			let { outputDir } = require(userConfigPath);
			outputPath = outputDir;
		} catch (e) { }
	}

	return outputPath;
}

module.exports = (api, ossOptions) => {
	const outputDir = getOutputPath(api.generator.context);

	api.render(
		{ ".config.js": "./template/.config.js" },
		{ ossOptions, outputDir }
	);

	const pkg = {
		scripts: {
			upload: "vue-cli-service upload"
		},
		devDependencies: {
			"webpack-aliyun-oss": "^0.3.0"
		}
	};

	api.extendPackage(pkg);

	api.exitLog('插件配置完成，您也可以直接修改项目根目录下的 .config.js 来修改配置参数');
};
