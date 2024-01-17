import { resolve } from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import postCssPxToRem from 'postcss-pxtorem';
import { defineConfig } from 'vite';

export default defineConfig(({ mode, command }) => {
  const isBuild = command === 'build'; // 是否是打包环境的判断
  const plugins = [react()];
  isBuild && plugins.push(legacy()); //  是打包环境，就把legacy()加入到plugins中
  return {
    plugins,
    css: {
      modules: {
        generateScopedName: '[name]_[local]_[hash:5]',
      },
      postcss: {
        plugins: [
          postCssPxToRem({
            // 自适应，px>rem转换
            rootValue: 108,
            exclude: /node_modules/i, // 过滤掉node_modules 文件夹下面的样式
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
            selectorBlackList: [], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
          }),
        ],
      },
      preprocessorOptions: {
        less: {
          // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
          javascriptEnabled: true,
          // 每个less文件都注入
          additionalData: '@import "@/assets/var.less";',
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 8888,
    },
  };
});
