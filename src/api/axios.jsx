import { Toast } from 'antd-mobile';
import axios from 'axios';
import Cookies from 'js-cookie';

import { COOKIE_KEY } from '@/components/const';
import { reLogin } from '@/components/UserContext';
import { VconsoleCom } from '@/utils';

const isDev = ['localhost:8888', 'hd.weixin.mama100.cn'].includes(
  location.host,
);
const api = axios.create({
  // baseURL: '//120.46.191.217:8000/api',
  baseURL: isDev ? '/api' : '//120.46.191.217:8000/api',
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

    // 601 token过期
    if (responseData.code === 601) {
      Toast.show({
        icon: 'loading',
        content: '登录过期，正在为您重新登录',
        afterClose: () => {
          reLogin();
        },
      });
      return Promise.reject(responseData.code);
    }

    // 检查 code 是否为 0
    if (responseData.code !== 0) {
      Toast.show({
        icon: 'fail',
        content: (
          <VconsoleCom>
            {responseData.message || '错误码：' + responseData.code}
          </VconsoleCom>
        ),
      });
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
