import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const MenuIcon = () => {
  const [openList, setOpenList] = useState(false);
  const items = ['Home', 'Devices', 'Scenes', 'Estates']; // Элементы списка

  const toggleDropdown = () => setOpenList(!openList);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Svg height={30} fill={'white'} viewBox="0 -960 960 960" width={35}>
          <Path d="M120-240v-80h400v80H120zm0-200v-80h720v80H120zm0-200v-80h720v80H120z" />
        </Svg>
      </TouchableOpacity>
      {openList && (
        <View style={styles.dropdown}>
          {items.map(item => (
            <TouchableOpacity>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  dropdown: {
    width: '100%',
    marginTop: 20,
    position: 'absolute',
    top: 20,
    zIndex: 10,
    backgroundColor: '#3760c9',
  },
  text: {
    fontSize: 20,
    color: 'white',
    padding: 15,
    textAlign: 'left',
  },
});
/*
export function MenuIcon() {
  const [visible, setVisible] = useState(false); // Состояние для управления видимостью списка
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']; // Элементы списка
  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Svg height={30} fill={'white'} viewBox="0 -960 960 960" width={35}>
          <Path d="M120-240v-80h400v80H120zm0-200v-80h720v80H120zm0-200v-80h720v80H120z" />
        </Svg>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true} //закрывает весь фон
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modalView}>
          <ScrollView style={styles.scrollView}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => {
                  setVisible(false); // Закрыть список после выбора
                }}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Button title={'x'} onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
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
  scrollView: {
    width: '100%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});
*/
