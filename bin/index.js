#!/usr/bin/env node

// CLI执行入口文件

import fs from 'fs';
import chalk from 'chalk'; // chalk 美化输出
import { execaSync, execa } from 'execa';
import ora from 'ora';
import fse from 'fs-extra';

import questions from '../questions/index.js';
import { getTemplatesDirRootPath } from '../utils/index.js';

// 存放模板文件的目录路径
const templatesDirRootPath = getTemplatesDirRootPath();
console.log(chalk.blue('存放模板文件的目录路径:'), templatesDirRootPath);

// 交互命令行输入的值
const config = await questions(templatesDirRootPath);
console.log(chalk.blue('config：'), config);

// 先创建目标目录，检查用户输入的目录是否已存在
fs.mkdirSync(`./${config.createDir}`);
if (!fs.existsSync(templatesDirRootPath)) {
  fs.mkdirSync(templatesDirRootPath);
}

// 获取远程仓库目录名称
const getGitRemoteFilename = () => {
  const arr = config.remoteUrl.split('/');
  return arr[arr.length - 1].split('.')[0];
};

// 远程仓库目录名称
const gitRemoteFilename = getGitRemoteFilename();
console.log(chalk.blue('gitRemoteFilename:'), gitRemoteFilename);

let getGitRemoteResult = {}; // 拉取远程仓库结果

// 获取远程仓库代码
const getGitRemote = () => {
  // 该远程仓库是否已经存在于本地
  const exist = fs.existsSync(
    `${templatesDirRootPath}/${gitRemoteFilename}/.git`
  );

  const spinners = [ora('读取中...')];
  spinners[0].start();

  if (exist) {
    // 存在，则 git pull
    getGitRemoteResult = execaSync(`git`, ['config', 'pull.rebase', 'false'], {
      cwd: `${templatesDirRootPath}/${gitRemoteFilename}`,
    });
    getGitRemoteResult = execaSync(`git`, ['pull'], {
      cwd: `${templatesDirRootPath}/${gitRemoteFilename}`,
    });
  } else {
    // 不存在，则 git clone
    try {
      getGitRemoteResult = execaSync(
        `git`,
        ['clone', '-b', 'master', config.remoteUrl],
        {
          cwd: templatesDirRootPath,
        }
      );
    } catch (err) {
      fs.rmdirSync(`./${config.createDir}`);
      console.error(err);
    }
  }

  fs.writeFile(
    `${templatesDirRootPath}/defaultRemoteUrl.txt`,
    config.remoteUrl,
    (err) => {
      if (err) console.log(err);
    }
  );
  console.log(chalk.blue('getGitRemoteResult：'), getGitRemoteResult);
  if (
    getGitRemoteResult.failed === true ||
    getGitRemoteResult.failed === undefined ||
    getGitRemoteResult.failed === null
  ) {
    spinners[0].fail('读取远程仓库失败！');
  } else {
    spinners[0].succeed('读取远程仓库成功！');
  }
};

getGitRemote();

/**
 * 进行copy
 */
const fsCopy = () => {
  try {
    fse.copy(
      `${templatesDirRootPath}/${gitRemoteFilename}`,
      `./${config.createDir}`,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          // git add 新创建的文件
          execa(`git`, ['add', './'], { cwd: './' }, (err) => {
            if (err) console.log(err);
          });
          console.log(chalk.green('创建模块成功！'));
        }
      }
    );
  } catch (err) {
    fs.rmdir(`./${config.createDir}`);
    console.error(err);
  }
};

fsCopy();
