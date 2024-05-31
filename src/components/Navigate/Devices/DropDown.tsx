import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ArrowIcon} from '../../../icons/TableIcon/ArrowIcon.tsx';

export const DropDown = ({
  list,
  setIsOpen,
  isOpen,
  setSelectedCategory,
}: {
  list: any;
  setIsOpen: any;
  isOpen: any;
  setSelectedCategory: any;
  selectedCategory: any;
}) => {
  const [selectItem, setSelectItem] = useState('Все');

  const isOpenDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: string) => {
    setSelectItem(item);
    setIsOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: 10,
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
            <Text style={{color: 'white', fontSize: 16}}>{selectItem}</Text>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.dropdown}>
            {list.map((item: string, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleSelectItem(item);
                  setSelectedCategory(item);
                }}>
                <Text style={{color: 'white', fontSize: 16, lineHeight: 50}}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: 50,
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
