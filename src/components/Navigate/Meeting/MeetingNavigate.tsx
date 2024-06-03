import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
/*import {SortingMeet} from './SortingMeet.tsx';*/
import {StartMeet} from './StartMeet.tsx';
import {ArchiveMeet} from './ArchiveMeet.tsx';
import casesTwo from '../../../assets/casesTwo.json';
import archive from '../../../assets/archive.json';
import {ArrowIconMeet} from '../../../icons/MeetingIcon/arrowIconMeet.tsx';

export const MeetingNavigate = () => {
  const [accordionNow, setAccordionNow] = useState(true);
  const [accordionArchive, setAccordionArchive] = useState(true);
  const slice = Math.ceil(casesTwo.length / 2);
  const firstSlice = casesTwo.slice(0, slice);
  const SecondSlice = casesTwo.slice(slice);
  const archiveSlice = Math.ceil(archive.length / 2);
  const firstArchiveSlice = archive.slice(0, archiveSlice);
  const SecondAcrhiveSlice = archive.slice(archiveSlice);

  const accordionViewNow = () => {
    setAccordionNow(!accordionNow);
  };
  const accordionViewArchive = () => {
    setAccordionArchive(!accordionArchive);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{color: 'white', fontSize: 25, marginRight: 40}}>
          Совещания
        </Text>
        {/*<SortingMeet />*/}
      </View>
      <View>
        <ScrollView>
          <View>
            <View>
              <TouchableOpacity onPress={accordionViewNow}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.textColor, styles.text]}>
                    {' '}
                    Предстоящие совещания
                  </Text>
                  <View style={{marginTop: 5}}>
                    <ArrowIconMeet accordionState={accordionNow} />
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                {accordionNow ? (
                  <View>
                    <StartMeet
                      firstSlice={firstSlice}
                      SecondSlice={SecondSlice}
                    />
                  </View>
                ) : (
                  ''
                )}
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={accordionViewArchive}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[styles.textColor, styles.text, {marginLeft: 8}]}>
                    Архив
                  </Text>
                  <View style={{marginTop: 5}}>
                    <ArrowIconMeet accordionState={accordionArchive} />
                  </View>
                </View>
              </TouchableOpacity>
              {accordionArchive ? (
                <View>
                  <ArchiveMeet
                    firstArchiveSlice={firstArchiveSlice}
                    SecondAcrhiveSlice={SecondAcrhiveSlice}
                  />
                </View>
              ) : (
                ''
              )}
            </View>
          </View>
        </ScrollView>
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
