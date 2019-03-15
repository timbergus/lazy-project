import { resolve } from 'path';

export default {
  title: 'Lazy Demo',
  description: 'This is the Lazy Demo project documentation.',
  themeConfig: {

  },
  modifyBabelRc: babelrc => Object.assign({}, babelrc, { plugins: [] }),
};
