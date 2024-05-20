import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ListIcon = () => {
  return (
    <Svg width={25} height={25} viewBox="0 0 20 16" fill="none">
      <Path
        d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM2 5h10.5v3.5H2V5zm0 5.5h10.5V14H2v-3.5zM18 14h-3.5V5H18v9z"
        fill="#EEE"
      />
    </Svg>
  );
};
