export default {
  title: 'Lazy Project',
  description: 'This is the Lazy Project documentation.',
  port: 3500,
  modifyBabelRc: babelrc => Object.assign({}, babelrc, { plugins: [] }),
};
