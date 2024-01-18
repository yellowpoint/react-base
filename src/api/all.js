import axios from './axios';

export * from './auth';

// 保存会员session信息(api/member/session/save)
export const sessionSave = (params) =>
  axios.post(`/member/session/save`, params);

// 会员信息(api/member/info)
export const memberInfo = (params) => axios.post(`/member/info`, params);

// 召唤首页(api/summon/index)
export const summonIndex = (params) => axios.post(`/summon/index`, params);

// 召唤(api/summons)
export const summon = (params) => axios.post(`/summon`, params);

// 收藏详情(api/collect/detail)
export const collectDetail = (params) => axios.get(`/collect/detail`, params);

// 卡片详情(api/collect/card/detail)
export const collectCardDetail = (params) =>
  axios.post(`/collect/card/detail`, params);

// 一键合成(api/exchange/one_key)
export const one_key = (params) => axios.post(`/exchange/one_key`, params);

// 领取红包(api/exchange/red_paccket)
export const red_paccket = (params) =>
  axios.post(`/exchange/red_paccket`, params);

// 直接积分兑换(api/exchange/score)
export const score = (params) => axios.post(`/exchange/score`, params);
