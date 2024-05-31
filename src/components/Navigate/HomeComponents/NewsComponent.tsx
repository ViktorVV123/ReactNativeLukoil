import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const NewsComponent = ({news}: {news: string; color: string}) => {
  return (
    <View style={styles.cardStyle}>
      <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.text}>
        {news}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    padding: 10,
  },
  cardStyle: {
    borderColor: '#939494',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
