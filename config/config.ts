import { defineConfig } from 'umi';
import { routes } from './routes';

export default defineConfig({
  publicPath: '/',
  layout: {
    name: '混合云交付',
    logo: '/favicon.png',
    antd: true,
    locale: false, // 是否开始国际化配置。开启后路由里配置的菜单名会被当作菜单名国际化的 key，插件会去 locales 文件中查找 menu.[key]对应的文案，默认值为改 key。该功能需要配置 @umijs/plugin-locale 使用。
  },
  request: {
    dataField: 'Data', // https://umijs.org/zh-CN/plugins/plugin-request#%E6%9E%84%E5%BB%BA%E6%97%B6%E9%85%8D%E7%BD%AE
  },
  locale: {},
  routes,
});
