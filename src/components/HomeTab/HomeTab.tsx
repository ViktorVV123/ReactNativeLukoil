import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Element} from './Element.tsx';

export const HomeTab = () => {
  const data = [
    {name: 'Light 1', scene: '3 Scenes', sub: 'Kitchen'},
    {name: 'Light 2', scene: '2 Scenes', sub: 'Kitchen'},
    {name: 'Light 3', scene: '5 Scenes', sub: 'Living room'},
    {name: 'Light 4', scene: '3 Scenes', sub: 'Kitchen'},
    {name: 'Light 5', scene: '4 Scenes', sub: 'Kitchen'},
    {name: 'Light 6', scene: '3 Scenes', sub: 'Bedroom'},
    {name: 'Light 7', scene: '1 Scenes', sub: 'Kitchen'},
    {name: 'Light 8', scene: '5 Scenes', sub: 'Bedroom'},
    {name: 'Light 9', scene: '2 Scenes', sub: 'Kitchen'},
    {name: 'Light 10', scene: '3 Scenes', sub: 'Kitchen'},
    {name: 'Light 11', scene: '1 Scenes', sub: 'Living room'},
    {name: 'Light 12', scene: '3 Scenes', sub: 'Kitchen'},
    {name: 'Light 13', scene: '2 Scenes', sub: 'Living room'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((el, index) => (
            <Element name={el.name} scene={el.scene} sub={el.sub} key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#0e1f83',
    padding: 25,
  },
  scroll: {
    flex: 1,
  },
});
