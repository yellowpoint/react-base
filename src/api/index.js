import axios from 'axios';
export const prefix = '/api/v2/scrm';

// export * from './common';

export const queryTagGroupDetail = (params) =>
  axios.post(`${prefix}/tag_create_group/task/detail}`, params);
