import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DropDown} from './DropDown.tsx';
import {TableComponent} from './TableComponent.tsx';
import {PageScore} from './PageScore.tsx';

export function DevicesScreen() {
  return (
    <View style={styles.containerApp}>
      <View style={styles.containerText}>
        <View>
          <Text style={styles.textH1}>Дэшборды</Text>
          <View>
            <View
              style={{
                backgroundColor: '#EF3248',
                width: 250,
                height: 3,
                marginTop: 10,
              }}
            />
            <Text style={styles.text}>Опубликованные дэшборды: 20 </Text>
          </View>
        </View>
        <View style={{zIndex: 1}}>
          <DropDown />
        </View>
        <View style={{marginTop: 15}}>
          <TableComponent />
        </View>
      </View>
      <PageScore />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 10,
  },
  containerText: {
    padding: 15,
  },
  textH1: {
    color: 'white',
    fontSize: 25,
  },
  text: {
    width: 250,
    color: 'white',
    fontSize: 16,
    padding: 5,
    backgroundColor: '#EF32480D',
  },
  input: {
    backgroundColor: '#313131',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    width: 300,
    borderRadius: 25,
    height: 40,
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
    paddingLeft: 20,
  },
});
