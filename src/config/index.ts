import { config, ENV_TYPES, ILinks, IApi } from './environment';

export default class EnvConfig {
  private static environment: ENV_TYPES = (process.env.UMI_ENV as ENV_TYPES) || ENV_TYPES.DEV;

  private static showEnvError() {
    throw new Error(`env must be oneof dev/test/prod, current env is ${EnvConfig.environment}`);
  }

  private static showKeyError(type: 'links' | 'api', key: string) {
    throw new Error(
      `in file enviroment.ts, ${EnvConfig.environment}.${type} does not include key ${key}, please check!`,
    );
  }

  static isDev(): boolean {
    return EnvConfig.environment === ENV_TYPES.DEV;
  }

  static isProduction(): boolean {
    return EnvConfig.environment === ENV_TYPES.PROD;
  }

  static getUrlConfig(key: string) {
    if (!config[EnvConfig.environment]) {
      EnvConfig.showEnvError();
    } else if (!config[EnvConfig.environment].links[key as keyof ILinks]) {
      EnvConfig.showKeyError('links', key);
    }
    return config[EnvConfig.environment].links[key as keyof ILinks];
  }

  static getApiConfig(key: string) {
    if (!config[EnvConfig.environment]) {
      EnvConfig.showEnvError();
    } else if (!config[EnvConfig.environment].api[key as keyof IApi]) {
      EnvConfig.showKeyError('api', key);
    }
    return config[EnvConfig.environment].api[key as keyof IApi];
  }
}
