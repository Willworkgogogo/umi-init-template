import Config from '@/config';
import { request } from '@/utils/request';
import { IGetTicketList, IGetTicketListResponse } from './struct';

const hybridURLPrefix = Config.getApiConfig('hybrid');

export const Api = {
  // 白风工单列表
  GetTicketList(params: IGetTicketList = {}) {
    return request<IGetTicketListResponse>(hybridURLPrefix, { data: { Action: 'GetTicketList', ...params } });
  },
};
