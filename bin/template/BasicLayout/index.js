import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import { getRootPath } from '../../utils/index.js';

export default ({ projectName, userMenu }) => {
  const file = fs.readFileSync(
    getRootPath('template/BasicLayout/BasicLayout.ejs')
  );
  const code = ejs.render(file.toString(), { projectName, userMenu });
  // 格式化
  return prettier.format(code, {
    useTabs: true,
    singleQuote: true,
    // jsxSingleQuote: true,
    arrowParens: 'avoid',
    trailingComma: 'all',
    parser: 'babel',
  });
};
