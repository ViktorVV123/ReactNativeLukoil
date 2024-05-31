import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {DropDown} from './DropDown.tsx';
import {TableComponent} from './TableComponent.tsx';
import {InputComponent} from './InputComponent.tsx';
import table from '../../../assets/table.json';

export function DevicesScreen() {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const list = ['Все', 'БННГ', 'БЭП', 'ГиД', 'ЛЛК', 'ПБОТиОС', 'ПИС'];
  const [color, setColor] = useState(false);
  const [tableItem, setTableItem] = useState(table);
  const [showBlock, setShowBlok] = useState(false);

  const filterTable = tableItem.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  const filteredTable =
    selectedCategory === 'Все'
      ? filterTable
      : filterTable.filter(item => item.subTitle === selectedCategory);
  const lengthList = table.length;
  const LenghtFavorite = table.filter(item => item.favorite === true);
  const lengthFavorite = LenghtFavorite.length;
  const colorChange = (id: number): any => {
    const item: any = filteredTable.find(items => items.id === id);
    setColor(item);
    setColor(!color);
  };
  //меняем цвет картинки при нажатии опираясь на favorite в массиве
  const toggleFavorite = (id: any) => {
    const updateFavorite = (item: any) => {
      if (item.id === id) {
        return {...item, favorite: !item.favorite};
      }
      return item;
    };

    setTableItem(prevItems => prevItems.map(updateFavorite));
  };
  return (
    <View style={styles.containerApp}>
      <View style={styles.containerText}>
        <View>
          <Text style={styles.textH1}>Дэшборды</Text>
          <View>
            <View
              style={{
                backgroundColor: '#EF3248',
                width: 250,
                height: 3,
                marginTop: 10,
              }}
            />
            <Text style={styles.text}>
              Опубликованные дэшборды: {lengthList}{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
            <DropDown
              list={list}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </TouchableWithoutFeedback>
          <InputComponent
            lengthFavorite={lengthFavorite}
            setSearch={setSearch}
            search={search}
          />
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.headerRow}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Опубликованные дэшборды</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Описание </Text>
            </View>
          </View>
          <ScrollView style={{marginBottom: 400}}>
            {filteredTable.map(el => (
              <ScrollView key={el.id}>
                <TableComponent
                  toggleFavorite={() => toggleFavorite(el.id)}
                  colorChange={colorChange}
                  key={el.id}
                  text={el.text}
                  title={el.title}
                  subTitle={el.subTitle}
                  url={el.url}
                  favorite={el.favorite}
                />
              </ScrollView>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 10,
  },
  containerText: {
    padding: 15,
  },
  textH1: {
    color: 'white',
    fontSize: 25,
  },
  text: {
    width: 250,
    color: 'white',
    fontSize: 16,
    padding: 5,
    backgroundColor: '#EF32480D',
  },
  input: {
    backgroundColor: '#313131',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    width: 300,
    borderRadius: 25,
    height: 40,
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
    paddingLeft: 20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
    justifyContent: 'space-around',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerCell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 'black',
    alignItems: 'flex-start',
    borderTopRightRadius: 15,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

/*
export function DevicesScreen() {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const list = ['Все', 'БННГ', 'БЭП', 'ГиД', 'ЛЛК', 'ПБОТиОС', 'ПИС'];

  const [tableItem, setTableItem] = useState(table);
  const filterTable = tableItem.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  const filteredTable =
    selectedCategory === 'Все'
      ? filterTable
      : filterTable.filter(item => item.subTitle === selectedCategory);
  const lengthList = table.length;
  const LenghtFavorite = table.filter(item => item.favorite === true);
  const lengthFavorite = LenghtFavorite.length;

  const toggleFavorite = (id: any) => {
    const updateFavorite = (item: any) => {
      if (item.id === id) {
        return {...item, favorite: !item.favorite};
      }
      return item;
    };

    setTableItem(prevItems => prevItems.map(updateFavorite));
  };
  return (
    <View style={styles.containerApp}>
      <View style={styles.containerText}>
        <View>
          <Text style={styles.textH1}>Дэшборды</Text>
          <View>
            <View
              style={{
                backgroundColor: '#EF3248',
                width: 250,
                height: 3,
                marginTop: 10,
              }}
            />
            <Text style={styles.text}>
              Опубликованные дэшборды: {lengthList}{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
            <DropDown
              list={list}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </TouchableWithoutFeedback>
          <InputComponent
            lengthFavorite={lengthFavorite}
            setSearch={setSearch}
            search={search}
          />
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.headerRow}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Опубликованные дэшборды</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Описание </Text>
            </View>
          </View>
          <ScrollView style={{marginBottom: 400}}>
            {filteredTable.map(el => (
              <ScrollView key={el.id}>
                <TouchableOpacity onPress={() => toggleFavorite(el.id)}>
                  <Svg
                    height={30}
                    viewBox="0 -960 960 960"
                    width={30}
                    fill="#EEEEEE">
                    <Path
                      d={
                        el.favorite
                          ? 'm233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'
                          : 'M354-287l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143zM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149zm247-35z '
                      }
                    />
                  </Svg>
                </TouchableOpacity>
              </ScrollView>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}*/
