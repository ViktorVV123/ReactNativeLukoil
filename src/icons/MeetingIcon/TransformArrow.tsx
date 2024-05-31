import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function TransformArrow() {
  return (
    <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF">
      <Path d="M400-280v-400l200 200-200 200z" />
    </Svg>
  );
}
