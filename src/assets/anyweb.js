import { Provider } from '@idealight-labs/anyweb-js-sdk';

import API from '@/api';

let providerObj = undefined;
// 需在小程序访问，添加反向代理
const appUrl = 'https://www.mama100.com/member-nft-h5/anyweb';
const init = () => {
  return new Promise((resolve) => {
    const provider = new Provider(
      {
        // logger: console, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
        logger: null, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
        appId: 'a8c9201d-6e6e-4b11-9550-b74c3ffef84b',
      },
      // appUrl,
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
      await API.nftAddress({ address: address?.[0] });
    })
    .catch((e) => {
      console.error('调用失败', e);
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
