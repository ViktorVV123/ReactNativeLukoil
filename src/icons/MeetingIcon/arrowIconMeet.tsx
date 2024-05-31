import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function ArrowIconMeet({accordionState}: {accordionState: any}) {
  return (
    <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF">
      {accordionState ? (
        <Path d="M400-280v-400l200 200-200 200z" />
      ) : (
        <Path d="M280-400l200-200 200 200H280z" />
      )}
    </Svg>
  );
}
