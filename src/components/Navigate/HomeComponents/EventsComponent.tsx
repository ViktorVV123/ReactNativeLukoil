import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const EventsComponent = ({
  event,
  text,
  color,
  category,
}: {
  event: string;
  text: string;
  color: string;
  category: string;
}) => {
  return (
    <View>
      <View style={styles.containerCard}>
        <View style={[styles.colorBar, {backgroundColor: color}]} />
        <View>
          <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.text}>
            {event}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={styles.miniText}>
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    backgroundColor: '#363636',
    marginBottom: 15,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 17,
    marginBottom: 5,
    paddingTop: 7,
  },
  miniText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    padding: 10,
    marginLeft: 5,
  },
  colorBar: {
    width: 3,
    height: '95%',
    borderRadius: 5,
    marginRight: 10,
  },
});
