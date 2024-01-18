import axios from 'axios';
import Cookies from 'js-cookie';

import { COOKIE_KEY } from '@/components/const';
import { logout } from '@/components/UserContext';

const api = axios.create({
  // baseURL: '//120.46.191.217:8000/api',
  baseURL: '/api',
  // 其他 Axios 配置选项
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些事情
    // 添加openid参数到请求中
    const openid = Cookies.getJSON(COOKIE_KEY)?.openid;
    if (config.method === 'get') {
      config.params = {
        openid,
        ...config.params,
      };
    }

    if (config.method === 'post' || config.method === 'put') {
      config.data = {
        openid,
        ...config.data,
      };
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  },
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    const responseData = response.data;

    if (responseData.code === 601) {
      return responseData.data;
      console.log('601');
      logout();
      return Promise.reject(responseData.code);
    }

    // 检查 code 是否为 0
    if (responseData.code !== 0) {
      // 弹窗或其他处理
      alert(
        `错误代码：${responseData.code}\n错误消息：${responseData.message}`,
      );
      return Promise.reject(responseData.code);
    }

    // 处理成功的响应
    return responseData.data;
  },
  (error) => {
    // 处理响应错误
    console.error('发生错误:', error.message);
    return Promise.reject(error);
  },
);
export default api;
