// 要创建的目录名称

export default () => ({
  type: 'input',
  name: 'packageName',
  message: '请输入要创建的项目名称：',
  validate(val) {
    if (val) return true;
    return '请输入要创建的项目名称';
  },
});
