import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

export const ModalComponentReact = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        backdropColor={'none'}
        isVisible={isModalVisible}>
        <View>
          <Text style={{color: 'white', fontSize: 30, margin: 20}}>Hello!</Text>

          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};
