/* eslint-disable */

import Taro from '@tarojs/taro';
import Icon from './h5/H5Icon';

export const JsIcon = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

export default JsIcon;
