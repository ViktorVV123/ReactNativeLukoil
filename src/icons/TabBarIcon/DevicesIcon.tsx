import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function DevicesIcon() {
  return (
    <Svg
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      height={30}
      viewBox="0 -960 960 960"
      fill={'white'}
      width={30}>
      <Path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600zm40-120h160v-280H640v280zm0 0h160-160z" />
    </Svg>
  );
}
