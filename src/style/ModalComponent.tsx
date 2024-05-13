import React from 'react';
import {Modal, View, Text, Button, StyleSheet} from 'react-native';
import {useModal} from './ModalContext.tsx';

export const ModalComponent = () => {
  const {isModalVisible, toggleModal, modalContent, modalStyle} = useModal();

  return (
    <Modal
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}>
      <View style={[styles.centeredView, modalStyle]}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{modalContent}</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
