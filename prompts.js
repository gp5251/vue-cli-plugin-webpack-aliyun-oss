module.exports = [
  {
    name: 'accessKeyId',
    type: 'input',
    message: 'please input your accessKeyId'
  },
  {
    name: 'accessKeySecret',
    type: 'input',
    message: 'please input your accessKeySecret'
  },
  {
    name: 'region',
    type: 'input',
    message: 'please input your region'
  },
  {
    name: 'bucket',
    type: 'input',
    message: 'please input your bucket'
  },
  {
    name: 'dist',
    type: 'input',
    message: 'what is the path do you want to upload to? defaults to /tmp.',
    default: '/tmp'
  }
]
