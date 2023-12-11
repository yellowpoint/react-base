const { override } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {},
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }
  }),


);
