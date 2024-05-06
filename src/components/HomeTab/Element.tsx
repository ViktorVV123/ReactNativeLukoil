import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArrowIcon} from '../../icons/HomeTabIcon/ArrowIcon.tsx';
import {LightBulb} from '../../icons/HomeTabIcon/LightBulb.tsx';

export const Element = ({
  name,
  scene,
  sub,
  text,
  id,
  onPress,
}: {
  name: string;
  scene: string;
  sub: string;
  text: string;
  id: string;
  onPress: any;
}) => {
  return (
    <View style={styles.containerEl}>
      <View style={styles.element}>
        <View style={{marginRight: 10}}>
          <LightBulb />
        </View>
        <View>
          <Text style={styles.headTitle}>{name}</Text>
          <Text style={styles.headTitleSub}>{sub}</Text>
        </View>
      </View>
      <View style={styles.containerSubTitle}>
        <Text style={styles.subTitle}>{scene}</Text>
        <View style={{marginLeft: 20}}>
          <ArrowIcon id={id} onPress={onPress} text={text} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerEl: {
    flexDirection: 'row',
    backgroundColor: '#13729b',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 7,
    padding: 15,
    flex: 1,
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  headTitle: {
    color: 'white',
    fontSize: 16,
  },
  headTitleSub: {
    fontSize: 12,
    marginTop: 5,
    color: '#c7c6c6',
  },
  subTitle: {
    color: '#c2c2c2',
    backgroundColor: '#232d60',
    padding: 6,
    borderRadius: 10,
    fontSize: 12,
  },
  containerSubTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
});
