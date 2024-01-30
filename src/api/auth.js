import axios from 'axios';

const isPro = location.host === 'www.mama100.com';

const isDev = !location.host.includes('mama100');
const mock = location.origin + '/mock';

// 默认为测试环境
const host_test = 'https://weixin.mama100.cn';
// 生产环境
const host_pro = 'https://www.mama100.com';
const host = isPro ? host_pro : host_test;

export const getAuthUrl = () => {
  let authEndpoint = `${host}/mama100-wechat/auth2/mama100wechat/unSilence/auth2`;

  // 开发时mock
  if (isDev) authEndpoint = mock;

  // 回调地址，在cookie塞入token、customerld、unionld、openld，限定域名mama100.com
  const redirectUrl = encodeURIComponent(window.location.href);
  // 1表示要求绑定了微信(注册会员)，如果没有绑定会去注册界面，0:不要求
  const bindingRequired = 1;

  const authUrl = `${authEndpoint}?bindingRequired=${bindingRequired}&redirectUrl=${redirectUrl}`;
  return authUrl;
};

// 传入openId，更新token
export const updateCookies = (params) =>
  axios.get(
    `${host}/mama100-wechat/cookie/mama100wechat/updateCookies`,
    params,
  );
