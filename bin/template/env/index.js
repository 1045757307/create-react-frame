import ejs from 'ejs';
import fs from 'fs';
// import prettier from 'prettier';
import { getRootPath } from '../../utils/index.js';

export default ({ developUrl }) => {
  const file = fs.readFileSync(getRootPath('template/env/env.ejs'));
  const code = ejs.render(file.toString(), { developUrl });
  return code;
  // 格式化
  // return prettier.format(code, { parser: 'babel' });
};
