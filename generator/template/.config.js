module.exports = {
    region: '<%- ossOptions.region %>',
    accessKeyId: '<%- ossOptions.accessKeyId %>',
    accessKeySecret: '<%- ossOptions.accessKeySecret %>',
    bucket: '<%- ossOptions.bucket %>',
    dist: '<%- ossOptions.dist %>', 				// root path in oss
    from: <%- JSON.parse(JSON.stringify(ossOptions.from)) %>, 				// 默认为 vue.config.js outputDir 下的所有文件
    buildRoot: '<%- ossOptions.buildRoot %>', 		// 默认与 vue.config.js outputDir 一致，如果设置setOssPath，此项可忽略
    test: '<%- ossOptions.test %>' 					// 仅仅显示上传文件，不做上传操作
}