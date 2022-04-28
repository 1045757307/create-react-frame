// 用户信息接口

export default () => ({
  type: 'input',
  name: 'currentUser',
  default: '/api/user/current-user',
  message: '请输入用户信息接口地址：',
});
