import React from 'react';
import { DatePicker } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <div>
      env: {process.env.UMI_ENV}
      <DatePicker />
    </div>
  );
};
