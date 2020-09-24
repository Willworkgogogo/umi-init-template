## Steps
1. git clone git@github.com:Willworkgogogo/umi-init-template.git
2. rm -rf .git
3. git init
4. git remote add YOUR_GITHUB_REPOSITORY_SSH_ADDRESS

## Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 注意事项
#### 路由icon的设置细节
icon name 为 组件名小写后去掉 outlined 或者 filled 或者 twotone，所得值。举例：<UserOutlined /> 的 icon name 即： user。

#### 全局的数据管理方案@umijs/plugin-model
- 一种基于 hooks 范式的简易数据管理方案（部分场景可以取代 dva），通常用于中台项目的全局共享数据。但@umijs/plugin-model能实现全局的状态共享。
- 使用者书写的就是一个普通的自定义 hooks，但 @umijs/plugin-model 把其中的状态变成了『全局状态』，多个组件中使用该 model 时，拿到的同一份状态。
- 约定在 src/models 目录下的文件为项目定义的 model 文件。每个文件需要默认导出一个 function，该 function 定义了一个 Hook，不符合规范的文件我们会过滤掉。
- 文件名则对应最终 model 的 name。
- 该插件无配置项。
- 使用useModel消费数据
```ts
import { useModel } from 'umi';
export default () => {
  const { user, fetchUser } = useModel('user', model => ({ user: model.user, fetchUser: model.fetchUser }));
  return <>hello</>
};
```
useModel 有两个参数，namespace 和 updater。
- namespace - 就是 hooks model 文件的文件名，如上面例子里的 useAuthModel
- updater - 可选参数。在 hooks model 返回多个状态，但使用组件仅引用了其中部分状态，并且希望仅在这几个状态更新时 rerender 时使用（性能相关）。