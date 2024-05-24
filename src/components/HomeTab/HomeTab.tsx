import {View, ScrollView, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {Element} from './Element.tsx';
import {useModal} from '../../Context/ModalContext.tsx';
import {ModalComponent} from '../../Context/ModalComponent.tsx';
import {TextInputTab} from './TextInputTab.tsx';

export const HomeTab = () => {
  const data = [
    {
      id: '1',
      name: 'Light 1',
      scene: '3 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World!',
    },
    {
      id: '2',
      name: 'Light 2',
      scene: '2 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World2!',
    },
    {
      id: '3',
      name: 'Light 3',
      scene: '5 HomeComponents',
      sub: 'Living room',
      text: 'Hello World3!',
    },
    {
      id: '4',
      name: 'Light 4',
      scene: '3 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World4!',
    },
    {
      id: '5',
      name: 'Light 5',
      scene: '4 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World5!',
    },
    {
      id: '6',
      name: 'Light 6',
      scene: '3 HomeComponents',
      sub: 'Bedroom',
      text: 'Hello World6!',
    },
    {
      id: '7',
      name: 'Light 7',
      scene: '1 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World7!',
    },
    {
      id: '8',
      name: 'Light 8',
      scene: '5 HomeComponents',
      sub: 'Bedroom',
      text: 'Hello World8!',
    },
    {
      id: '9',
      name: 'Light 9',
      scene: '2 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World9!',
    },
    {
      id: '10',
      name: 'Light 10',
      scene: '3 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World10!',
    },
    {
      id: '11',
      name: 'Light 11',
      scene: '1 HomeComponents',
      sub: 'Living room',
      text: 'Hello World11!',
    },
    {
      id: '12',
      name: 'Light 12',
      scene: '3 HomeComponents',
      sub: 'Kitchen',
      text: 'Hello World12!',
    },
    {
      id: '13',
      name: 'Light 13',
      scene: '2 HomeComponents',
      sub: 'Living room',
      text: 'Hello World13!',
    },
  ];

  const [selectText, setSelectText] = useState('');
  const handlePress = (id: string) => {
    const item = data.find(items => items.id === id);
    setSelectText(item);
  };
  const {toggleModal, updateModalContent} = useModal();

  const showModal = () => {
    updateModalContent('test', {backgroundColor: 'green'});
    toggleModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <TextInputTab />
        <Button title="Go go gogo " onPress={showModal} />
        <ModalComponent />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 25}}>
          {data.map((el, index) => (
            <Element
              onPress={handlePress}
              id={el.id}
              name={el.name}
              scene={el.scene}
              sub={el.sub}
              text={el.text}
              key={index}
            />
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
