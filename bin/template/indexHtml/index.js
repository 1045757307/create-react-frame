import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import { getRootPath } from '../../utils/index.js';

export default ({ projectName }) => {
  const file = fs.readFileSync(getRootPath('template/indexHtml/indexHtml.ejs'));
  const code = ejs.render(file.toString(), { projectName });
  // 格式化
  return prettier.format(code, { parser: 'html' });
};
