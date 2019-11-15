module.exports = (api, options, rootOptions) => {
  api.render(
    { ".config.js": "./template/.config.js" },
    { ossOptions: options }
  );

  const pkg = {
    scripts: {
      upload: "vue-cli-service upload"
    },
    devDependencies: {
      "webpack-aliyun-oss": "^0.2.2"
    }
  };

	api.extendPackage(pkg);
	
	api.exitLog('vue-cli-plugin-webpack-aliyun-oss configuration done');
};
