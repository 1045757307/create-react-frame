import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import { getRootPath } from '../../utils/index.js';

export default ({ currentUser }) => {
  const file = fs.readFileSync(
    getRootPath('template/mainCompontent/mainCompontent.ejs')
  );
  const code = ejs.render(file.toString(), { currentUser });
  // 格式化
  return prettier.format(code, { parser: 'babel' });
};
