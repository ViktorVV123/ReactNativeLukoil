import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {Menu} from './Menu.tsx';
import {Cloud} from './Cloud.tsx';
import {Chart} from './Chart.tsx';

export const HeaderTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Menu />
        <Text style={styles.textStyle}>Scenes</Text>
      </View>
      <View style={styles.containerIcon}>
        <Cloud />
        <Chart />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#071773',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
  },
  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
});
