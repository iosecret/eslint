module.exports = {
  extends: ['./rules/ts.js', './rules/iosecret.js'].map(require.resolve),

  rules: {},
};
