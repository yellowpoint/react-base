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
            selectorBlackList: ['.norem'], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
            minPixelValue: 2, // 设置要替换的最小像素值。
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
      // https: true,
      proxy: {
        '/api': {
          // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
          target: 'http://120.46.191.217:8000', // 目标地址 --> 服务器地址
          changeOrigin: true, // 允许跨域
          ws: true, // 允许websocket代理
          // 重写路径 --> 作用与vue配置pathRewrite作用相同
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
