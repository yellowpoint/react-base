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
