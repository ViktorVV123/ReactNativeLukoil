import React, {useRef, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {EventsComponent} from './EventsComponent.tsx';
import {NewsComponent} from './NewsComponent.tsx';
import {Calendars} from './Calendars.tsx';
import {SwapButton} from '../Estates/SwapButton.tsx';

export function ScenesNavigate() {
  const cases = {
    '2024-05-03': {
      marked: true,
      dotColor: '#9397AC',
      tasks: [
        {
          text: [
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '14:00 - 14:30',
              category: 'Комиссия БС ПиС',
            },
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '10:00 - 12:00',
              category: 'Комиссия ',
            },
          ],
        },
      ],
    },
    '2024-05-15': {
      marked: true,
      dotColor: '#9397AC',
      tasks: [
        {
          text: [
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '12:00 - 13:00',
              category: 'Комиссия БС ПиС',
            },
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '16:00 - 17:00',
              category: 'Комиссия ',
            },
          ],
        },
      ],
    },
    '2024-05-20': {
      marked: true,
      dotColor: '#9397AC',
      tasks: [
        {
          text: [
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '13:00 - 14:00',
              category: 'Комиссия БС ПиС',
            },
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '9:00 - 12:00',
              category: 'Комиссия ',
            },
          ],
        },
      ],
    },
    '2024-05-16': {
      marked: true,
      dotColor: '#9397AC',
      tasks: [
        {
          text: [
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '9:00 - 12:00',
              category: 'Комиссия ',
            },
            {
              test: 'Комиссия по обеспечению стабильности деятельности организаций Группы "ЛУКОЙЛ" Бизнес-сегмента "Переработка и сбыт"',
              time: '11:00 - 12:00',
              category: 'Комиссия БС ПиС',
            },
          ],
        },
      ],
    },
  };

  const newsTask = [
    {
      news: 'ЛУКОЙЛ и Ямало-Ненецкий автономный округ подписали дополнительное соглашение о сотрудничестве.',
    },
    {
      news: 'В Астрахани при поддержке ЛУКОЙЛа выпустили книгу о художнике С. Мочалове.',
    },
    {
      news: 'На Нижегородском НПЗ ЛУКОЙЛа состоялся чемпионат по настольному теннису.',
    },
    {
      news: 'Команда ЛУКОЙЛ-Западной Сибири стала победителем соревнований по баскетболу трудовых коллективов Когалыма.',
    },
    {
      news: 'В Усинске при содействии ЛУКОЙЛа прошёл межрегиональный турнир по хоккею.',
    },
  ];
  const newsTaskTwo = [
    {
      news: 'ЛУКОЙЛ и Ямало-Ненецкий автономный округ подписали дополнительное соглашение о сотрудничестве.',
      newsOne:
        'В Астрахани при поддержке ЛУКОЙЛа выпустили книгу о художнике С. Мочалове.',
      newsTwo:
        'На Нижегородском НПЗ ЛУКОЙЛа состоялся чемпионат по настольному теннису.',
      newsThree:
        'Команда ЛУКОЙЛ-Западной Сибири стала победителем соревнований по баскетболу трудовых коллективов Когалыма.',
      newsFour:
        'В Усинске при содействии ЛУКОЙЛа прошёл межрегиональный турнир по хоккею.',
    },
    {
      news: 'Молодые специалисты Нижегородского НПЗ ЛУКОЙЛа провели экологическое мероприятие для детей',
      newsOne:
        'В Лангепасе при поддержке ЛУКОЙЛа прошёл первый городской фестиваль «Хоровая дружба»',
      newsTwo: 'Саратоворгсинтез провёл детский конкурс чтецов',
      newsThree:
        'ЛУКОЙЛ Белоруссия признана лучшей организацией по охране труда среди предприятий Минска',
      newsFour:
        'На НПЗ ЛУКОЙЛа в Болгарии подписали новый коллективный договор',
    },
    {
      news: 'Молодые специалисты Нижегородского НПЗ ЛУКОЙЛа провели экологическое мероприятие для детей',
      newsOne:
        'В Лангепасе при поддержке ЛУКОЙЛа прошёл первый городской фестиваль «Хоровая дружба»',
      newsTwo: 'Саратоворгсинтез провёл детский конкурс чтецов',
      newsThree:
        'ЛУКОЙЛ Белоруссия признана лучшей организацией по охране труда среди предприятий Минска',
      newsFour:
        'На НПЗ ЛУКОЙЛа в Болгарии подписали новый коллективный договор',
    },
    {
      news: 'Молодые специалисты Нижегородского НПЗ ЛУКОЙЛа провели экологическое мероприятие для детей',
      newsOne:
        'В Лангепасе при поддержке ЛУКОЙЛа прошёл первый городской фестиваль «Хоровая дружба»',
      newsTwo: 'Саратоворгсинтез провёл детский конкурс чтецов',
      newsThree:
        'ЛУКОЙЛ Белоруссия признана лучшей организацией по охране труда среди предприятий Минска',
      newsFour:
        'На НПЗ ЛУКОЙЛа в Болгарии подписали новый коллективный договор',
    },
    {
      news: 'Молодые специалисты Нижегородского НПЗ ЛУКОЙЛа провели экологическое мероприятие для детей',
      newsOne:
        'В Лангепасе при поддержке ЛУКОЙЛа прошёл первый городской фестиваль «Хоровая дружба»',
      newsTwo: 'Саратоворгсинтез провёл детский конкурс чтецов',
      newsThree:
        'ЛУКОЙЛ Белоруссия признана лучшей организацией по охране труда среди предприятий Минска',
      newsFour:
        'На НПЗ ЛУКОЙЛа в Болгарии подписали новый коллективный договор',
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
      color: '#7e219a',
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
  const [activeIndex, setActiveIndex] = useState(1);

  // Создаем референцию для FlatList
  const flatListRef = useRef<FlatList>(null);

  // Функция для обновления активного индекса при изменении видимых элементов
  const onViewRef = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  // Конфигурация видимости для определения видимого элемента
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  // Функция для рендеринга каждого элемента карусели
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.news}</Text>
      <Text style={styles.itemText}>{item.newsOne}</Text>
      <Text style={styles.itemText}>{item.newsTwo}</Text>
      <Text style={styles.itemText}>{item.newsThree}</Text>
      <Text style={styles.itemText}>{item.newsFour}</Text>
    </View>
  );
  return (
    <View style={styles.containerApp}>
      <SwapButton />
      <ScrollView>
        <View>
          <Calendars cases={cases} />
        </View>
        <View style={styles.position}>
          <View style={{width: '50%', padding: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Новости</Text>
              <View style={styles.paginationContainer}>
                {newsTask.map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.dot,
                      activeIndex === index
                        ? styles.activeDot
                        : styles.inactiveDot,
                    ]}
                    onPress={() => {
                      flatListRef.current?.scrollToIndex({index});
                    }}
                  />
                ))}
              </View>
              <Text style={{color: 'white', fontSize: 18}}>14.05.2024</Text>
            </View>
            <View />
            <View style={styles.carouselContainer}>
              <FlatList
                data={newsTaskTwo} // Данные для карусели
                renderItem={renderItem} // Функция рендеринга элемента
                horizontal // Горизонтальная прокрутка
                pagingEnabled // Постраничная прокрутка
                showsHorizontalScrollIndicator={false} // Отключение горизонтального индикатора прокрутки
                keyExtractor={(item, index) => index.toString()} // Уникальный ключ для каждого элемента
                onViewableItemsChanged={onViewRef.current} // Обработчик изменения видимых элементов
                viewabilityConfig={viewConfigRef.current} // Конфигурация видимости
                ref={flatListRef} // Ссылка на FlatList
              />
            </View>
          </View>
          <View style={{width: '40%', padding: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  },
  position: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 40,
  },
  containerCalendar: {
    backgroundColor: '#2E2E2E',
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
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: 600, // Ширина элемента равна ширине экрана
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  itemText: {
    marginTop: 5,
    fontSize: 18,
    marginBottom: 25,
    color: 'white',
  },
  paginationContainer: {
    flexDirection: 'row', // Горизонтальное расположение индикаторов пагинации
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#dc1c1c',
    marginBottom: 25,
  },
  inactiveDot: {
    backgroundColor: '#EEEEEE',
  },
  notesContainer: {
    marginTop: 10,
  },
  noteText: {
    fontSize: 16,
    color: 'gray',
  },
});
