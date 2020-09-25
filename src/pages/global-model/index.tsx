import React from 'react';
import { useModel } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

export default () => {
  const { user, singin, singout } = useModel('useAuthModel', m => ({
    user: m.user,
    singin: m.signin,
    singout: m.signout,
  }));
  return (
    <div>
      <h2>使用、修改全局的数据</h2>
      <Button onClick={() => singin('aaa', 'bbb')} type="primary" style={{ marginRight: 10 }}>
        登录
      </Button>
      <Button onClick={() => singout()}>退出登录</Button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};
