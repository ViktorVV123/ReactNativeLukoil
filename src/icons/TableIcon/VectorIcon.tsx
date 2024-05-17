import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const VectorIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 16 6" fill="none">
      <Path d="M16 0H0v2h16V0zM0 6h16V4H0v2z" fill="#EEE" />
    </Svg>
  );
};
