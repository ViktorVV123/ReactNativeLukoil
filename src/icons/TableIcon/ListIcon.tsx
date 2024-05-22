import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Modal, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import WebView from 'react-native-webview';

export const ListIcon = ({url}: {url: string}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };
  const handlePressClose = () => {
    setModalVisible(false);
  };
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <Svg width={25} height={25} viewBox="0 0 20 16" fill="none">
          <Path
            d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM2 5h10.5v3.5H2V5zm0 5.5h10.5V14H2v-3.5zM18 14h-3.5V5H18v9z"
            fill="#EEE"
          />
        </Svg>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            top: 20,
            left: 1200,
            zIndex: 10,
            backgroundColor: '#c54747',
            borderRadius: 40,
          }}
          onPress={handlePressClose}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'white',
              padding: 10,
            }}>
            X
          </Text>
        </TouchableOpacity>
        <WebView source={{uri: url}} style={{marginTop: 20}} />
      </Modal>
    </>
  );
};
