import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export function ScenesNavigate() {
  return (
    <View style={styles.containerApp}>
      <Text>123</Text>
      <Image source={require('../../icons/HeaderIcon/test.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e1f83',
  },
  text: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
  },
});
