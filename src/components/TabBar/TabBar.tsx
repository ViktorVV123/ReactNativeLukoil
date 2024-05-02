import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DevicesIcon} from '../../icons/TabBarIcon/DevicesIcon.tsx';
import {EstatesIcon} from '../../icons/TabBarIcon/EstatesIcon.tsx';
import {HomeIcon} from '../../icons/TabBarIcon/HomeIcon.tsx';
import {ScenesIcon} from '../../icons/TabBarIcon/ScenesIcon.tsx';

export const TabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <HomeIcon />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.containerIcon}>
        <DevicesIcon />
        <Text style={styles.text}>Devices</Text>
      </View>
      <View style={styles.containerIcon}>
        <ScenesIcon />
        <Text style={styles.text}>Scenes</Text>
      </View>
      <View style={styles.containerIcon}>
        <EstatesIcon />
        <Text style={styles.text}>Estates</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#6A8FE6',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    bottom: -5,
    right: 0,
    padding: 5,
  },
  containerIcon: {
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
