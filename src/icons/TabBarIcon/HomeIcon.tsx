import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

export const HomeIcon = ({fill}: {fill: string}) => {
  const navigation = useNavigation();

  return (
    // @ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Svg height={30} fill={fill} viewBox="0 -960 960 960" width={30}>
        <Path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160zm320-350z" />
      </Svg>
    </TouchableOpacity>
  );
};
