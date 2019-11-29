// 支持所有 webpack-aliyun-oss 的配置参数，这里只显示必须参数
// 如：可增加 from 自定义上传文件
module.exports = {
	region: '<%= ossOptions.region %>',
	accessKeyId: '<%= ossOptions.accessKeyId %>',
	accessKeySecret: '<%= ossOptions.accessKeySecret %>',
	bucket: '<%= ossOptions.bucket %>',
	dist: '<%= ossOptions.dist %>',
	buildRoot: '<%= outputDir %>',
	test: false
}