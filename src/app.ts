// 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。

/* 约定写法，动态设置pro-layout插件 */
export const layout = {
  logout() {},
  rightRender() {
    return 'hello man';
  },
};
