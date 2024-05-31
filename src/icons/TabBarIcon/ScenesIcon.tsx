import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function ScenesIcon({fill}: {fill: string}) {
  const navigation = useNavigation();
  return (
    // @ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate('HomeComponents')}>
      <Svg height={30} fill={fill} viewBox="0 -960 960 960" width={30}>
        <Path d="M612-292l56-56-148-148v-184h-80v216l172 172zM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80zm0-400zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160z" />
      </Svg>
    </TouchableOpacity>
  );
}
