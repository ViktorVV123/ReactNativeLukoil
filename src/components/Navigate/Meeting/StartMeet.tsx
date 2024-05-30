import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export const StartMeet = ({
  firstSlice,
  SecondSlice,
}: {
  firstSlice: any;
  SecondSlice: any;
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flex: 2, marginRight: 15}}>
          {firstSlice.map((el: any, index: string) => (
            <View key={index} style={styles.containerCard}>
              <View style={styles.line} />
              <View>
                <Text style={[styles.textColor, styles.texth1]}>{el.test}</Text>
                <Text style={[styles.textColor, styles.time]}>{el.time}</Text>
                <Text style={[styles.textColor, styles.category]}>
                  {el.category}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{flex: 2}}>
          {SecondSlice.map((el: any, index: string) => (
            <View key={index} style={styles.containerCard}>
              <View style={styles.line} />
              <View>
                <Text style={[styles.textColor, styles.texth1]}>{el.test}</Text>
                <Text style={[styles.textColor, styles.time]}>{el.time}</Text>
                <Text style={[styles.textColor, styles.category]}>
                  {el.category}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
