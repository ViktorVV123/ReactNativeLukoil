import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SortingMeet} from './SortingMeet.tsx';
import {InputMeet} from './InputMeet.tsx';
import {StartMeet} from './StartMeet.tsx';
import {ArchiveMeet} from './ArchiveMeet.tsx';
import casesTwo from '../../../assets/casesTwo.json';

export const MeetingNavigate = () => {
  const slice = Math.ceil(casesTwo.length / 2);
  const firstSlice = casesTwo.slice(0, slice);
  const SecondSlice = casesTwo.slice(slice);
  const [accordion, setAccordion] = useState(true);
  const accordionView = () => {
    setAccordion(!accordion);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'white', fontSize: 25, marginRight: 40}}>
          Совещания
        </Text>
        <SortingMeet />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <InputMeet />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={accordionView}>
          <Text style={[styles.textColor, styles.text]}>
            Предстоящие совещания
          </Text>
        </TouchableOpacity>
        <View>
          {accordion ? (
            <View>
              <StartMeet firstSlice={firstSlice} SecondSlice={SecondSlice} />
            </View>
          ) : (
            ''
          )}
        </View>
      </View>
      <View>
        <ArchiveMeet />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2E2E',
    flex: 1,
    padding: 30,
  },
  textColor: {
    color: 'white',
  },
  text: {
    fontSize: 22,
    marginBottom: 12,
  },
});
