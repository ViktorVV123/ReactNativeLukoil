import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ArrowIcon} from '../../../icons/TableIcon/ArrowIcon.tsx';
import {InputComponent} from './InputComponent.tsx';

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState('Все');
  const isOpenDropDown = () => {
    setIsOpen(!isOpen);
  };
  const isCloseDropDown = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const handleSelectItem = (item: string) => {
    setSelectItem(item);
    setIsOpen(false);
  };
  return (
    <TouchableWithoutFeedback onPress={isCloseDropDown}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={isOpenDropDown}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 20,
              padding: 8,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>{selectItem}</Text>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.dropdown}>
            {['БННГ', 'БЭП', 'Гид', 'ЛЛК', 'ПБОТиОС', 'ПИС'].map(
              (item: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelectItem(item)}>
                  <Text style={{color: 'white', fontSize: 20, lineHeight: 50}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        )}
        <View>
          <InputComponent />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: 50,
    zIndex: 20,
    backgroundColor: '#131313',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 0.5,
  },
});
