// eslint 配置文件，规则 0：禁用 off、1：警告 error、2：错误 warn
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  ignorePatterns: [
    '**/coverage',
    '**/dist',
    '**/build',
    '**/node_modules',
    '!.stylelintrc.*',
  ],
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // script 或者 module
    allowImportExportEverywhere: false, // 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部
    ecmaFeatures: {
      globalReturn: false, // 设置为 true，当 sourceType 为 script 时，允许全局 return
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 'off',
  },
};
