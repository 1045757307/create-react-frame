// 开发环境接口服务代理

export default () => ({
  type: 'input',
  name: 'developUrl',
  default: 'http://localhost:3000',
  message: '请输入开发环境接口服务代理：',
});
