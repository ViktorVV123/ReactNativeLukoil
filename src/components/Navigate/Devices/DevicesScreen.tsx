import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DropDown} from './DropDown.tsx';
import {TableComponent} from './TableComponent.tsx';
import {PageScore} from './PageScore.tsx';
import {InputComponent} from './InputComponent.tsx';

export function DevicesScreen() {
  const [search, setSearch] = useState('');
  const table = [
    {
      id: 1,
      title: 'Реализация нефти ПАО ЛУКОЙЛ',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о реализации нефти ПАО ЛУКОЙЛ и распределении НПЗ Компании, Рынок РФ, Экспорт через ПАО Транснефть, Экспорт минуя Транснефть',
      url: 'https://ya.ru/',
    },
    {
      id: 2,
      title: 'Проект плана загрузки НПЗ РФ',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о плане загрузки НПЗ РФ с учетом остатков на начало месяца и отгрузки',
      url: 'https://google.com/',
    },
    {
      id: 3,
      title:
        'Распределение и удельная эффективность масляной продукции (ЛЛК, LITASCO и ЛУКОЙЛ)',
      subTitle: 'ЛЛК',
      text: 'Дэшборд предоставляет информацию о распределении масляной продукции для ЛЛК/ЛИТАСКО/ЛУКОЙЛ',
      url: 'https://ya.ru/',
    },
    {
      id: 4,
      title: 'Общие и административные расходы',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о динамике общих и административных расходов ПАО',
      url: 'https://google.com/',
    },
  ];
  const filterTable =
    /*table.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),*/
    table.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );

  /* const searchTableDash = internalData.filter(el => el.name.toLowerCase().includes(searchTerm.toLowerCase())).filter(el => selection === 'Все' ? el : el.business_block === selection)*/
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
            <Text style={styles.text}>Опубликованные дэшборды: 20 </Text>
          </View>
        </View>
        <View
          style={{
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <DropDown />
          <InputComponent setSearch={setSearch} search={search} />
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.headerRow}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Опубликованные дэшборды</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Описание</Text>
            </View>
          </View>
          <View>
            {filterTable.map(el => (
              <TableComponent
                key={el.id}
                text={el.text}
                title={el.title}
                subTitle={el.subTitle}
                url={el.url}
              />
            ))}
          </View>
        </View>
      </View>
      <PageScore />
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
