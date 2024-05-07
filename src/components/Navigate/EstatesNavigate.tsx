import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function EstatesNavigate() {
  return (
    <View style={styles.containerApp}>
      <Text style={styles.text}>Estates</Text>
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
