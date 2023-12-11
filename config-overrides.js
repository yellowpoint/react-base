const path = require('path')
const { override, addLessLoader, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {},
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }
  }),
  addWebpackAlias({
    ["@/"]: path.resolve(__dirname, "src/")
  }),
  process.env.NODE_ENV === 'production' ?
    addWebpackPlugin(new BundleAnalyzerPlugin({ analyzerMode: 'static', reportFilename: '../node_modules/report.html' }))
    : undefined


);
