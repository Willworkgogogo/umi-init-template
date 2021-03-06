import React from 'react';
import { useRequest, request } from 'umi';
import { Button } from 'antd';
import { Api } from '@/api';

export default () => {
  const { loading, data, error, run } = useRequest(Api.GetTicketList, { manual: true });

  console.log(loading, data, error);

  if (loading) return <span>Loading...</span>;

  if (error) return <span>{error}</span>;

  return <Button onClick={() => run()}>请求数据</Button>;
};
