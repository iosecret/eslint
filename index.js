module.exports = {
  extends: ['./rules/iosecret.js', './rules/ts.js'].map(require.resolve),

  rules: {},
};
