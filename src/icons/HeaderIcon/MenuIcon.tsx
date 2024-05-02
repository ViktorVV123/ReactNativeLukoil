import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function MenuIcon() {
  return (
    <Svg
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      height={30}
      fill={'white'}
      viewBox="0 -960 960 960"
      width={35}>
      <Path d="M120-240v-80h400v80H120zm0-200v-80h720v80H120zm0-200v-80h720v80H120z" />
    </Svg>
  );
}
