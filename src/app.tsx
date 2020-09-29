// 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。
import React from 'react';
import { Avatar } from 'antd';
import { RequestConfig } from 'umi';
import { Const } from '@/utils/const';

/* 约定写法，动态设置plugin-request配置 */
// https://umijs.org/zh-CN/plugins/plugin-request#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
export const request: RequestConfig = {
  timeout: Const.API_TIME_OUT,
  errorConfig: {
    // 按约定格式返回错误对象
    adaptor: resData => {
      return {
        ...resData,
        success: resData.RetCode === Const.API_CODE_SUCCESS,
        errorCode: resData.RetCode,
        errorMessage: resData.Message,
        data: resData.Data,
        traceId: resData.uuid,
        showType: 2,
      };
    },
  },
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
};

/* 约定写法，动态设置pro-layout插件 */
export const layout = {
  logout() {},
  rightRender() {
    return (
      <div>
        <span style={{ marginRight: 10 }}>当前环境：{process.env.UMI_ENV}</span>
        <Avatar />
      </div>
    );
  },
};
