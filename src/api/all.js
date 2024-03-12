import axios from './axios';

// 保存会员session信息(api/member/session/save)
export const sessionSave = (params) =>
  axios.post(`/member/session/save`, params);
