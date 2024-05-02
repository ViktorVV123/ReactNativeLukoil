import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function ArrowIcon() {
  return (
    <Svg
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      fill="#fff">
      <Path d="M321-80l-71-71 329-329-329-329 71-71 400 400L321-80z" />
    </Svg>
  );
}

