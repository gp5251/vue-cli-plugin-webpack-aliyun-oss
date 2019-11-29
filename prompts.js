module.exports = [
	{
		name: 'accessKeyId',
		type: 'input',
		message: '请输入 accessKeyId'
	},
	{
		name: 'accessKeySecret',
		type: 'input',
		message: '请输入 accessKeySecret'
	},
	{
		name: 'region',
		type: 'input',
		message: '请输入 region'
	},
	{
		name: 'bucket',
		type: 'input',
		message: '请输入 bucket'
	},
	{
		name: 'dist',
		type: 'input',
		message: '您希望上传到oss哪个路径下? 默认为 /tmp',
		default: '/tmp'
	}
]
