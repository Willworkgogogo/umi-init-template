import { defineConfig } from 'umi';
import { routes } from './routes';

export default defineConfig({
  layout: {
    name: '混合云交付',
    antd: true,
    locale: 'zh-CN',
  },
  locale: {},
  routes,
});
