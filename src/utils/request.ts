import { request as UmiRequest } from 'umi';
import { RequestOptionsInit } from 'umi-request';
import _ from 'lodash';

type OptionsType = RequestOptionsInit & { skipErrorHandler?: boolean };

export const request = <T>(url: string, options: OptionsType = {}) =>
  UmiRequest<T>(getFormatURL(url, options), {
    method: 'POST',
    ...options,
  });

function getFormatURL(url: string, options: OptionsType) {
  const u = new URL(url);
  if (_.isEmpty(u.search) && options.data?.Action) {
    return `${url}?Action=${options.data.Action}`;
  }
  return url;
}
