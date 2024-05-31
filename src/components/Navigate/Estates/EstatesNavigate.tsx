import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PicturePagination} from './PicturePagination.tsx';
import {UsersPagination} from './UsersPagination.tsx';

export function EstatesNavigate() {
  return (
    <View style={styles.containerApp}>
      <UsersPagination />
      <PicturePagination />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    /*  backgroundColor: '#2e2e2e', // Темный фон*/
    flexDirection: 'row',
    padding: 20,
  },
});
