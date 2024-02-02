import { Toast } from 'antd-mobile';
import axios from 'axios';
import Cookies from 'js-cookie';

import { COOKIE_KEY } from '@/components/const';
import { reLogin } from '@/components/UserContext';
import { VconsoleCom } from '@/utils';

import { baseApiPath } from '../env.js';

const isDev = import.meta.env.DEV;
const isText = ['120.46.191.217'].includes(location.hostname); // 测试指定端口
let baseURL = isDev ? '/api' : baseApiPath;
if (isText) baseURL = 'http://120.46.191.217:8000/api';
const api = axios.create({
  baseURL,
});
const openid = Cookies.getJSON(COOKIE_KEY)?.openid || Cookies.get('openId');
// 请求拦截器
api.interceptors.request.use(
  (config) => {
    Toast.show({
      icon: 'loading',
      content: '加载中…',
      duration: 0,
      maskClickable: false,
    });
    // 在发送请求之前做一些事情
    // 添加openid参数到请求中

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
    Toast.clear();
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
    // 12星座卡与1红包已得到，还未合成隐藏款
    if (responseData.code === 12) {
      return responseData.code;
    }
    // 检查 code 是否为 0
    if (responseData.code !== 0) {
      Toast.show({
        icon: 'fail',
        content: (
          <VconsoleCom>
            {responseData.message || '错误码：' + responseData.code}
            <div>账号为：{openid}</div>
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
    Toast.show({
      icon: 'fail',
      content: <VconsoleCom>{error.message}</VconsoleCom>,
    });
    return Promise.reject(error);
  },
);
export default api;
