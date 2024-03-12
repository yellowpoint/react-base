import { Provider } from '@idealight-labs/anyweb-js-sdk';
import { Toast } from 'antd-mobile';

import API from '@/api';

let providerObj = undefined;
// 需在小程序访问，添加反向代理
const appUrl = 'https://www.mama100.com/member-nft-h5/anyweb/html#/';
const init = () => {
  return new Promise((resolve) => {
    const provider = new Provider(
      {
        // logger: console, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
        logger: null, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
        appId: 'a8c9201d-6e6e-4b11-9550-b74c3ffef84b',
      },
      appUrl,
    );

    provider.on('ready', () => {
      resolve(provider);
      providerObj = provider;
    });
  });
};

export const cfx_accounts = async () => {
  if (!providerObj) {
    await init();
  }
  return providerObj
    .request({
      method: 'cfx_accounts',
      params: [
        {
          availableNetwork: [1, 1029],
          scopes: ['baseInfo'],
        },
      ],
    })
    .then(async (data) => {
      const { chainId, networkId, address, code } = data;
      // 判断 address 是否存在
      const address0 = address?.[0];
      if (!address0) {
        return Promise.reject('address 不存在');
      }
      await API.nftAddress({ address: address0 });
    })
    .catch((e) => {
      Toast.show({
        icon: 'fail',
        content: '钱包地址获取失败',
      });
      return Promise.reject('钱包地址获取失败', e);
    });
};

export const anyweb_home = async () => {
  if (!providerObj) {
    await init();
  }

  return providerObj
    .request({
      method: 'anyweb_home',
    })
    .then((data) => {})
    .catch((e) => {
      console.error('调用失败', e);
    });
};
