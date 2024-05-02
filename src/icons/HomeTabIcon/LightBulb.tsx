import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function LightBulb() {
  return (
    <Svg
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}>
      <Path
        d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80zM320-200v-80h320v80H320zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330z"
        fill="#6A8FE6"
      />
    </Svg>
  );
}
