import React from 'react';
import {Modal, View, Text, Button, StyleSheet} from 'react-native';
import {useModal} from './ModalContext'; // Путь к файлу ModalContext.js должен быть верным

export const ModalComponent = () => {
  const {isModalVisible, toggleModal} = useModal();

  return (
    <Modal
      transparent={true} //во весь экран перекрыая все
      visible={isModalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Context</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', //тень позади модалки
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});
