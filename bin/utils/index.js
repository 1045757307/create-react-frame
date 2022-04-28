// 具函数，主要是获取脚手架项目的物理路径函数

import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

// 获取绝对路径
export const getRootPath = (pathUrl) => {
  const __dirname = fileURLToPath(import.meta.url);
  return path.resolve(__dirname, `../../${pathUrl}`);
};

// 设置模板缓存目录
export const getTemplatesDirRootPath = () => {
  // 存放模板文件的文件夹名称
  const templatesDirPath = 'CreateModulesProjects';
  const processCwd = process.cwd();
  const reg = /\/|\\/;
  const processCwdArr = processCwd.split(reg);
  // 存放模板文件的目录路径
  return `/${processCwdArr[1]}/${processCwdArr[2]}/${templatesDirPath}`;
};
