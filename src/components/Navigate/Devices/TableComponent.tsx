import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {VectorIcon} from '../../../icons/TableIcon/VectorIcon.tsx';
import {StarIcon} from '../../../icons/TableIcon/StarIcon.tsx';

export const TableComponent = () => {
  const table = [
    {
      id: 1,
      title: 'Реализация нефти ПАО ЛУКОЙЛ',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о реализации нефти ПАО ЛУКОЙЛ и распределении НПЗ Компании, Рынок РФ, Экспорт через ПАО Транснефть, Экспорт минуя Транснефть',
    },
    {
      id: 2,
      title: 'Проект плана загрузки НПЗ РФ',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о плане загрузки НПЗ РФ с учетом остатков на начало месяца и отгрузки',
    },
    {
      id: 3,
      title:
        'Распределение и удельная эффективность масляной продукции (ЛЛК, LITASCO и ЛУКОЙЛ',
      subTitle: 'ЛЛК',
      text: 'Дэшборд предоставляет информацию о распределении масляной продукции для ЛЛК/ЛИТАСКО/ЛУКОЙЛ',
    },
    {
      id: 4,
      title: 'Общие и административные расходы',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о динамике общих и административных расходов ПАО',
    },
  ];

  return (
    <View style={{marginTop: 15}}>
      <View style={styles.headerRow}>
        <View style={{width: '40%', height: 35}}>
          <Text style={styles.headerText}>Опубликованные дэшборды</Text>
        </View>
        <View style={{width: '40%'}}>
          <Text style={styles.headerText}>Описание</Text>
        </View>
      </View>
      {table.map(item => (
        <View key={item.id} style={styles.row}>
          <View style={styles.cellLeft}>
            <VectorIcon />
            <StarIcon />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.subTitleText}>{item.subTitle}</Text>
            </View>
          </View>
          <View style={styles.cellRight}>
            <Text style={styles.descriptionText}>{item.text}</Text>
            <Text style={styles.urlText}>url</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    paddingVertical: 5,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  cellLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  textContainer: {
    marginLeft: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
  },
  subTitleText: {
    color: 'white',
  },
  cellRight: {
    width: '50%',
  },
  descriptionText: {
    color: 'white',
    fontSize: 16,
  },
  urlText: {
    color: 'white',
    fontSize: 16,
  },
});
