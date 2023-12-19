import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postCssPxToRem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:5]',
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 75,
          exclude: /node_modules/i, // 过滤掉node_modules 文件夹下面的样式
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: [], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
        }),
      ],
    },
    preprocessorOptions: {
      // key + config key代表预处理器的名
      less: {
        // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
        // 在webpack里就给less-loader去配置就好了
        math: 'always',
        globalVars: {},
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
