import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function ChartIcon() {
  return (
    <Svg fill={'white'} height={30} viewBox="0 -960 960 960" width={35}>
      <Path d="M296-80l-56-56 276-277 140 140 207-207 57 57-264 263-140-140L296-80zm-136-40q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v168H160v472zm0-552h560v-88H160v88zm0 0v-88 88z" />
    </Svg>
  );
}
