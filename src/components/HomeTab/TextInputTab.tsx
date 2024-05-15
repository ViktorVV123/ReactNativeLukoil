import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


export const TextInputTab = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={'text'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#2774b6',
    height: 40,
  },
});
