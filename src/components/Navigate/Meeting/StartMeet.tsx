import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export const StartMeet = ({
  test,
  time,
  category,
  date,
}: {
  test: string;
  time: string;
  category: string;
  date: string;
}) => {
  return (
    <ScrollView>
      <View>
        <View style={styles.containerCard}>
          <Text style={styles.textColor}>{test}</Text>
          <Text style={styles.textColor}>{time}</Text>
          <Text style={styles.textColor}>{category}</Text>
          <Text style={styles.textColor}>{date}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {},
  containerCard: {
    flexDirection: 'row',
    backgroundColor: '#363636',
    marginBottom: 10,
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
  text: {
    fontSize: 25,
  },
});
