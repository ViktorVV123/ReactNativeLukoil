import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgComponent} from '../../icons/HeaderIcon/CloudIcon.tsx';

export const Cloud = () => {
  return (
    <View style={styles.containerCloud}>
      <SvgComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  containerCloud: {
    marginRight: 5,
  },
});
