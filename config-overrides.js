const path = require('path');
const {
  override,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  overrideDevServer,
  fixBabelImports,
  addPostcssPlugins,
} = require('customize-cra');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/v2ex/': {
      target: 'https://www.v2ex.com',
      changeOrigin: true,
      pathRewrite: { '^/v2ex': '/' },
    },
  };
  return configFunction;
};
const addAnalyzer = () => {
  return process.env.NODE_ENV === 'production'
    ? addWebpackPlugin(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: '../node_modules/report.html',
        }),
      )
    : undefined;
};
const addRem = () => {
  // addPostcssPlugins 需要在 addLessLoader 之后
  return addPostcssPlugins([
    require('postcss-px2rem-exclude')({
      remUnit: 16,
      propList: ['*'],
      exclude: '',
    }),
  ]);
};
const addAntd = () => {
  // 按需加载
  return fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  });
};
module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
        localIdentName: '[local]--[hash:base64:5]', // 自定义 CSS Modules 的 localIdentName
      },
    }),
    // addRem(),
    addWebpackAlias({
      '@/': path.resolve(__dirname, 'src/'),
    }),
    addAnalyzer(),
  ),
  devServer: overrideDevServer(addProxy()),
};
