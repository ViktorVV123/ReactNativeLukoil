import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';

export const StarIcon = () => {
  const [color, setColor] = useState(false);

  const colorChange = () => {
    setColor(!color);
  };
  return (
    <TouchableOpacity onPress={colorChange}>
      <Svg height={30} viewBox="0 -960 960 960" width={30} fill="#EEEEEE">
        <Path
          d={
            color
              ? 'm233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'
              : 'M354-287l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143zM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149zm247-35z '
          }
        />
      </Svg>
    </TouchableOpacity>
  );
};
