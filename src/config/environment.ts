export enum ENV_TYPES {
  DEV = 'dev',
  TEST = 'test',
  PROD = 'prod',
}

interface IConfigItem {
  links: ILinks;
  api: IApi;
}

export interface ILinks {
  baidu: string;
}

export interface IApi {
  hybrid: string;
}

export const config: Record<ENV_TYPES, IConfigItem> = {
  dev: {
    links: {
      baidu: 'http://baidu.com',
    },
    api: {
      hybrid: 'http://192.168.152.161:20040',
    },
  },
  test: {
    links: {
      baidu: 'http://baidu.com',
    },
    api: {
      hybrid: 'http://192.168.152.161:20040',
    },
  },
  prod: {
    links: {
      baidu: 'http://baidu.com',
    },
    api: {
      hybrid: 'http://192.168.152.161:20040',
    },
  },
};
