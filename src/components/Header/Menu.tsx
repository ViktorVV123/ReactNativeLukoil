import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MenuIcon} from '../../icons/HeaderIcon/MenuIcon.tsx';

export const Menu = () => {
  return (
    <View style={styles.container}>
      <MenuIcon />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});
