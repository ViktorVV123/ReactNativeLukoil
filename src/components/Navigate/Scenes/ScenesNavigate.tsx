import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EventsComponent} from './EventsComponent.tsx';
import {NewsComponent} from './NewsComponent.tsx';

export function ScenesNavigate() {
  const newsTask = [
    {
      news: 'ЛУКОЙЛ и Ямало-Ненецкий автономный округ подписали дополнительное соглашение о сотрудничестве.',
      color: '#939494',
    },
    {
      news: 'В Астрахани при поддержке ЛУКОЙЛа выпустили книгу о художнике С. Мочалове.',
      color: '#939494',
    },
    {
      news: 'На Нижегородском НПЗ ЛУКОЙЛа состоялся чемпионат по настольному теннису.',
      color: '#939494',
    },
    {
      news: 'Команда ЛУКОЙЛ-Западной Сибири стала победителем соревнований по баскетболу трудовых коллективов Когалыма.',
      color: '#939494',
    },
    {
      news: 'В Усинске при содействии ЛУКОЙЛа прошёл межрегиональный турнир по хоккею.',

      color: '#939494',
    },
  ];

  const events = [
    {
      event: 'ЛУКОЙЛ-Калининградморнефть Цех Nº 297',
      text: 'Произведен запуск ВРУ, после плановых ремонтных работ',
      color: '#36a6c0',
      category: 'Прочее',
    },
    {
      event: 'ЛУКОЙЛ-ЮНП АЗС №34',
      text: 'Задымление в электрощитовой',
      color: '#36a6c0',
      category: 'Прочее',
    },
    {
      event: 'ЛУКОЙЛ-Калининградморнефть Цех Nº 31',
      text: 'ВРУ остановлено для проведения плановых работ',
      color: '#8e43b2',
      category: 'Инцидент',
    },
    {
      event: 'ЛУКОЙЛ-Калининградморнефть Цех Nº 297',
      text: 'Произошло возгорание',
      color: '#d22717',
      category: 'ЧC',
      date: '14.05.2024',
    },
  ];
  return (
    <View style={styles.containerApp}>
      <View style={{width: '50%', padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Новости</Text>
          <Text style={{color: 'white', fontSize: 18}}>14.05.2024</Text>
        </View>
        {newsTask.map((item, index) => (
          <View>
            <NewsComponent key={index} news={item.news} color={item.color} />
          </View>
        ))}
      </View>
      <View style={{width: '40%', padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>События</Text>
          <Text style={{color: 'white', fontSize: 18}}>14.05.2024</Text>
        </View>
        {events.map((item, index) => (
          <EventsComponent
            key={index}
            event={item.event}
            text={item.text}
            color={item.color}
            category={item.category}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#2E2E2E',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginBottom: 15,
  },
});
