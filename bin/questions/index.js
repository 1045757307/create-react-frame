/**
 * 交互式命令行
 * 交互问答入口文件
 */

import inquirer from 'inquirer';

import createDir from './createDir.js';
import developUrl from './developUrl.js';
import projectName from './projectName.js';
import currentUser from './currentUser.js';
import userMenu from './userMenu.js';

export default () =>
  inquirer.prompt([
    createDir(), // 要创建的目录名称
    developUrl(),
    projectName(),
    currentUser(),
    userMenu(),
  ]);
