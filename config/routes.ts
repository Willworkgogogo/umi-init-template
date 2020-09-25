import { IRoute } from '@umijs/core';

export const routes: IRoute[] = [
  {
    path: '/',
    name: '全局数据使用',
    component: '@/pages/global-model',
  },
  {
    path: '/data-request',
    name: '数据请求',
    component: '@/pages/data-request',
  },
];
