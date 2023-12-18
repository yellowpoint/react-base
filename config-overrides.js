const path = require('path');
const {
  override,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  overrideDevServer,
  fixBabelImports,
  // addPostcssPlugins,
  adjustStyleLoaders,
  addWebpackModuleRule,
} = require('customize-cra');
const rewirePostcss = require('react-app-rewire-postcss');
const px2rem = require('postcss-px2rem-exclude');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// 重写 addPostcssPlugins 方法
const addPostcssPlugins = (plugins) => (config) => {
  const rules = config.module.rules.find((rule) =>
    Array.isArray(rule.oneOf),
  ).oneOf;
  // console.log('rules', rules);

  rules.forEach(
    (r) =>
      r.use &&
      r.use.forEach((u) => {
        if (
          u.options &&
          u.options.postcssOptions &&
          u.options.postcssOptions.ident === 'postcss'
        ) {
          // console.log('rules', plugins, r);

          if (!u.options.postcssOptions.plugins) {
            u.options.postcssOptions.plugins = plugins;
          }
          if (u.options.postcssOptions.plugins) {
            const originalPlugins = u.options.postcssOptions.plugins;
            u.options.postcssOptions.plugins = [originalPlugins, ...plugins];
          }
        }
      }),
  );
  // console.log('cc', config);
  // xx;
  return config;
};
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
    require('postcss-pxtorem')({
      // remUnit: 75,
      rootValue: 75,
      propList: ['*'],
      exclude: /node_modules/i,
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
    // addRem(),
    addPostcssPlugins([
      require('postcss-pxtorem')({
        rootValue: 75,
        propList: ['*'],
        exclude: /node_modules/i,
      }),
    ]),
    addLessLoader(),
    adjustStyleLoaders(({ use: [, css, postcss] }) => {
      // const postcssOptions = postcss.options;
      // postcss.options.postcssOptions = postcssOptions;
      console.log('postcss', JSON.stringify(postcss));
      xx;
      css.options.modules = {
        localIdentName: '[name]_[local]_[hash:base64:5]',
      };
    }),
    addWebpackAlias({
      '@/': path.resolve(__dirname, 'src/'),
    }),
    addAnalyzer(),
    // (config, env) => {
    //   // 重写postcss
    //   rewirePostcss(config, {
    //     plugins: () => [
    //       require('postcss-flexbugs-fixes'),
    //       require('postcss-preset-env')({
    //         autoprefixer: {
    //           flexbox: 'no-2009',
    //         },
    //         stage: 3,
    //       }),
    //       //关键:设置px2rem
    //       px2rem({
    //         // remUnit: 75,
    //         // exclude: /node-modules/i,
    //       }),
    //     ],
    //   });

    //   return config;
    // },
  ),
  devServer: overrideDevServer(addProxy()),
};
