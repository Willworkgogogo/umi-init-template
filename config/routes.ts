import { IRoute } from '@umijs/core';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'dashboard',
    icon: 'user',
    component: '@/pages/index'
  },
];
