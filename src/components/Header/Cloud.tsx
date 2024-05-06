import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CloudIcon} from '../../icons/HeaderIcon/CloudIcon.tsx';

export const Cloud = () => {
  return (
    <View style={styles.containerCloud}>
      <CloudIcon />
    </View>
  );
};
const styles = StyleSheet.create({
  containerCloud: {
    marginRight: 5,
  },
});
