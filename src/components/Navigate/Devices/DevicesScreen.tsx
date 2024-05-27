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

export function DevicesScreen() {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const list = ['Все', 'БННГ', 'БЭП', 'ГиД', 'ЛЛК', 'ПБОТиОС', 'ПИС'];
  const [favorite, setFavorite] = useState([]);
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
    {
      id: 5,
      title: 'Выбросы парниковых газов',
      subTitle: 'ПБОТиОС',
      text: 'Дэшборд предоставляет информацию о выбросах парниковых газов в разрезе бизнес блоков, категориях источников, видов',
      url: 'https://google.com/',
    },
    {
      id: 6,
      title: 'Макроэкономические параметры',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о ценах на газ и нефть в динамике по дням',
      url: 'https://google.com/',
    },
    {
      id: 7,
      title: 'Мониторинг эксплуатационного этапа инвест проектов ПИС',
      subTitle: 'ПИС',
      text: 'Дэшборд предоставляет информацию о мониторинге эксплуатационного этапа инвест проектов по отклонениям, доходам и рентабельности',
      url: 'https://google.com/',
    },
    {
      id: 8,
      title: 'Паспорт инвестиционного проекта БС ПИС',
      subTitle: 'ПИС',
      text: 'Дэшборд предоставляет информацию о паспорте эксплуатационного проета показывающий динамику денежных потоков, сетевой график и изменения сырья с продукцией',
      url: 'https://google.com/',
    },
    {
      id: 9,
      title:
        'Дэшборд предоставляет информацию о крупных и приоритетных проектов ГиД в разрезх денежного потока, добычи ЖУВ и структурных инвестиций',
      subTitle: 'ГиД',
      text: 'Дэшборд предоставляет информацию о крупных и приоритетных проектов ГиД в разрезх денежного потока, добычи ЖУВ и структурных инвестиций',
      url: 'https://google.com/',
    },
    {
      id: 10,
      title: 'Динамика розничной реализации',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о Динамика розничной реализации по объемам реализации и % изменения относительного прошлого года',
      url: 'https://google.com/',
    },
    {
      id: 11,
      title: 'Динамика и план-факт добычи ЖУВ и газа (за период)',
      subTitle: 'ГиД',
      text: 'Динамика и план-факт добычи ЖУВ и газа (за период)',
      url: 'https://google.com/',
    },
    {
      id: 12,
      title: 'Динамика и план-факт добычи ЖУВ (по месяцам)',
      subTitle: 'ГиД',
      text: 'Динамика и план-факт добычи ЖУВ (по месяцам)',
      url: 'https://google.com/',
    },
    {
      id: 13,
      title: 'Динамика сквозной маржи (Нижегородская область)',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о помесячной динамике сквозной, оптовой и розничной маржи в разрезе по продуктам для Нижегородской области',
      url: 'https://google.com/',
    },
    {
      id: 14,
      title: 'Общие и административные расходы',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о динамике общих и административных расходов ПАО',
      url: 'https://google.com/',
    },
    {
      id: 15,
      title: 'Динамика биржевго индекса цен',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о ежемесячной динамке биржвеого инждекса цен в разрезе по типу продукта',
      url: 'https://google.com/',
    },
    {
      id: 16,
      title: 'Общие и административные расходы',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о динамике общих и административных расходов ПАО',
      url: 'https://google.com/',
    },
    {
      id: 17,
      title: 'Общие и административные расходы',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о динамике общих и административных расходов ПАО',
      url: 'https://google.com/',
    },
    {
      id: 18,
      title: 'Общие и административные расходы',
      subTitle: 'БЭП',
      text: 'Дэшборд предоставляет информацию о динамике общих и административных расходов ПАО',
      url: 'https://google.com/',
    },
  ];
  const filterTable = table.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  const filteredTable =
    selectedCategory === 'Все'
      ? filterTable
      : filterTable.filter(item => item.subTitle === selectedCategory);
  const lenghtList = table.length;
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
              Опубликованные дэшборды: {lenghtList}{' '}
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
          <InputComponent setSearch={setSearch} search={search} />
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
                  key={el.id}
                  text={el.text}
                  title={el.title}
                  subTitle={el.subTitle}
                  url={el.url}
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
