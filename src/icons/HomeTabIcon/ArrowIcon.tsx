import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

export const ArrowIcon = ({
  id,
  onPress,
  text,
}: {
  id: string;
  text: string;
  onPress: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(onPress(id))}>
      <Svg height={24} viewBox="0 -960 960 960" width={24} fill="#fff">
        <Path d="M321-80l-71-71 329-329-329-329 71-71 400 400L321-80z" />
      </Svg>
      <Modal
        animationType="slide"
        transparent={true} //перекрывает полносьб. задний фон
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Закрыть</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#06165e',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
});
