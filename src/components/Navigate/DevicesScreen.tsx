import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export function DevicesScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.containerApp}>
      <Text style={styles.text}>Details Screen1</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
    fontSize: 20,
    marginBottom: 10,
  },
});
