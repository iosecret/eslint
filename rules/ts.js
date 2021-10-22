const { join } = require('path');
const { existsSync } = require('fs');

let tsconfigPath = join(process.cwd(), 'tsconfig.json');

if (!existsSync(tsconfigPath)) {
  tsconfigPath = join(__dirname, '../tsconfig.json');
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },

  extends: ['airbnb-typescript'],

  parserOptions: {
    project: tsconfigPath,
  },

  rules: {
    
  },
};
