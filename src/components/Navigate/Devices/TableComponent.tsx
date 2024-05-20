import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {VectorIcon} from '../../../icons/TableIcon/VectorIcon.tsx';
import {StarIcon} from '../../../icons/TableIcon/StarIcon.tsx';
import {ListIcon} from '../../../icons/TableIcon/ListIcon.tsx';

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
        'Распределение и удельная эффективность масляной продукции (ЛЛК, LITASCO и ЛУКОЙЛ)',
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
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Опубликованные дэшборды</Text>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Описание</Text>
        </View>
      </View>
      {table.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.row,
            index === table.length - 1 && styles.lastRow, // Apply bottom border radius to the last row
          ]}>
          <View style={styles.cellLeft}>
            <VectorIcon />
            <View style={styles.line} />
            <StarIcon />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.subTitleText}>{item.subTitle}</Text>
            </View>
          </View>
          <View style={styles.cellRight}>
            <Text style={styles.descriptionText}>{item.text}</Text>
            <View style={styles.iconContainer}>
              <ListIcon />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden', // Ensures rounded corners are not clipped
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerCell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  lastRow: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
  subTitleText: {
    color: 'white',
  },
  descriptionText: {
    color: 'white',
    flex: 1,
    fontSize: 18,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightColor: 'white',
  },
  line: {
    height: '100%',
    width: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },

  /*  headerRow: {
  flexDirection: 'row',
  backgroundColor: '#1F1F1F',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomWidth: 1,
  borderBottomColor: 'black',
},
headerCell: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 5,
},
headerText: {
  color: 'white',
  fontSize: 18,
},
row: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: 'black',
},
lastRow: {
  /!*    borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,*!/
},
cell: {
  flex: 1,
  padding: 10,
  borderRightWidth: 1,
  borderRightColor: 'black',
},
cellLeft: {
  flexDirection: 'row',
  alignItems: 'center',
},
cellRight: {
  justifyContent: 'center',
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
descriptionText: {
  color: 'white',
  fontSize: 16,
},
urlText: {
  color: 'white',
  fontSize: 16,
},
line: {
  height: '100%',
  width: 1,
  backgroundColor: 'black',
  marginHorizontal: 10,
  borderRightWidth: 1,
  borderColor: 'black'
},*/
});
