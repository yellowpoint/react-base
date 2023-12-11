// eslint 配置文件，规则 0：禁用 off、1：警告 error、2：错误 warn
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false, // 是否需要 babel 配置文件
        sourceType: 'module', // script 或者 module
        allowImportExportEverywhere: false, // 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部
        ecmaFeatures: {
          globalReturn: false, // 设置为 true，当 sourceType 为 script 时，允许全局 return
        },
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.jsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        '@sc/eslint-config-sensorsdata-react',
        '@sc/eslint-config-sensorsdata-typescript/react',
        'prettier',
      ],
      plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/ban-ts-comment': 1,
        'require-jsdoc': 'off',
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react/require-default-props': 0,
        'no-unused-vars': 1,
        'arrow-body-style': 0,
        'react-hooks/exhaustive-deps': 0,
        'react/no-unused-prop-types': 1,
        'no-empty-function': 1,
        'no-useless-escape': 1,
        'max-len': 0,
        'func-names': 0,
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true, // 允许短路
          },
        ],
        'jsx-a11y/media-has-caption': 0,
        'max-params': ['warn', 3],
        'import/no-duplicates': 2,
      },
    },
  ],
};
