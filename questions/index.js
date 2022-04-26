/**
 * 交互式命令行
 * 交互问答入口文件
 */

import inquirer from 'inquirer';

import remoteUrl from './remoteUrl.js';
import createDir from './createDir.js';

export default (templatesDirRootPath) =>
  inquirer.prompt([
    remoteUrl(templatesDirRootPath), // 设置远程仓库地址
    createDir(), // 要创建的目录名称
  ]);
