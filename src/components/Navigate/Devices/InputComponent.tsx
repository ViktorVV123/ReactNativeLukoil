import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SwitchIcon} from '../../../icons/TableIcon/SwitchIcon.tsx';
import {SearchIcon} from '../../../icons/TableIcon/SearchIcon.tsx';

export const InputComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View >
        <SwitchIcon />
      </View>
      <Text style={{color: 'white', fontSize: 16, verticalAlign: 'middle'}}>
        Только избранные 0
      </Text>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 25,
          backgroundColor: '#313131',
          alignItems: 'center',
          alignContent: 'center',
          marginLeft: 15,
        }}>
        <TextInput
          placeholder="Поиск"
          style={styles.input}
          placeholderTextColor="#EEEEEE"
        />
        <SearchIcon />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    verticalAlign: 'middle',
    backgroundColor: '#313131',
    borderColor: '#EEEEEE',
    width: 230,
    borderRadius: 25,
    height: 35,
    color: 'white',
    fontSize: 14,
    paddingLeft: 20,
    alignItems: 'center',

  },
});
