import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ArchiveMeet = ({
  firstArchiveSlice,
  SecondAcrhiveSlice,
}: {
  firstArchiveSlice: any;
  SecondAcrhiveSlice: any;
}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2, marginRight: 15}}>
        {firstArchiveSlice.map((el: any, index: string) => (
          <View key={index} style={styles.containerCard}>
            <View style={styles.line} />
            <View>
              <Text style={[styles.textColor, styles.texth1]}>{el.test}</Text>
              <Text style={[styles.textColor, styles.time]}>{el.time}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={[
                      styles.textColor,
                      styles.category,
                      {textAlign: 'center', marginTop: 7},
                    ]}>
                    {el.category}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                    marginRight: 10,
                  }}>
                  <Text
                    style={[
                      styles.textColor,
                      {
                        marginRight: 20,
                        backgroundColor: '#a4a2a2',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingTop: 4,
                        borderRadius: 10,
                      },
                    ]}>
                    Повестка
                  </Text>
                  <Text
                    style={[
                      styles.textColor,
                      {
                        backgroundColor: '#c71b1b',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingTop: 4,
                        borderRadius: 10,
                      },
                    ]}>
                    Материалы
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View style={{flex: 2}}>
        {SecondAcrhiveSlice.map((el: any, index: string) => (
          <View key={index} style={styles.containerCard}>
            <View style={styles.line} />
            <View>
              <Text style={[styles.textColor, styles.texth1]}>{el.test}</Text>
              <Text style={[styles.textColor, styles.time]}>{el.time}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={[
                      styles.textColor,
                      styles.category,
                      {textAlign: 'center', marginTop: 7},
                    ]}>
                    {el.category}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                    marginRight: 10,
                  }}>
                  <Text
                    style={[
                      styles.textColor,
                      {
                        marginRight: 20,
                        backgroundColor: '#a4a2a2',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingTop: 4,
                        borderRadius: 10,
                      },
                    ]}>
                    Повестка
                  </Text>
                  <Text
                    style={[
                      styles.textColor,
                      {
                        backgroundColor: '#c71b1b',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingTop: 4,
                        borderRadius: 10,
                      },
                    ]}>
                    Материалы
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 80,
  },
  containerCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#363636',
    borderRadius: 15,
    padding: 10,
  },
  textColor: {
    color: 'white',
    fontSize: 16,
  },
  line: {
    width: 3,
    height: '100%',
    backgroundColor: '#9397AC',
    marginRight: 10,
  },
  texth1: {
    fontWeight: 500,
  },
  time: {
    marginTop: 5,
  },
  category: {
    textAlign: 'center',
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#939191',
    width: 150,
    color: '#939191',
    marginTop: 4,
    fontSize: 14,
  },
  text: {
    fontSize: 25,
  },
});
