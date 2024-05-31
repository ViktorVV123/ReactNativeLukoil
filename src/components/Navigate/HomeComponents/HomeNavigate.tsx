import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {EventsComponent} from './EventsComponent.tsx';
import {Calendars} from './Calendars.tsx';
import {SwapButton} from './SwapButton.tsx';
import cases from '../../../assets/cases.json';
import newsTask from '../../../assets/newsTask.json';
import newsTaskTwo from '../../../assets/newsTaskTwo.json';
import events from '../../../assets/events.json';

export function HomeNavigate() {
  const [activeIndex, setActiveIndex] = useState(1);

  // Создаем референцию для FlatList
  const flatListRef = useRef<FlatList>(null);

  // Функция для обновления активного индекса при изменении видимых элементов
  const onViewRef = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });
  useEffect(() => {
    //перелистывание карточек новостей
    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (activeIndex + 1) % newsTaskTwo.length;
        flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
        setActiveIndex(nextIndex);
      }
    }, 4000); // Меняем элемент каждые 3 секунды

    return () => clearInterval(interval);
  }, [activeIndex]);
  // Конфигурация видимости для определения видимого элемента
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  // Функция для рендеринга каждого элемента карусели
  const renderItem = ({item}: {item: any}) => (
    <View style={styles.itemContainer}>
      <View style={{justifyContent: 'flex-end'}}>
        <Text
          style={{
            color: 'white',
            marginBottom: 5,
            backgroundColor: '#424242',
            padding: 5,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 15,
          }}>
          {item.date}
        </Text>
      </View>
      <View>
        <Text style={styles.itemText}>{item.news}</Text>
        <Text style={styles.itemText}>{item.newsOne}</Text>
        <Text style={styles.itemText}>{item.newsTwo}</Text>
        <Text style={styles.itemText}>{item.newsThree}</Text>
        <Text style={styles.itemText}>{item.newsFour}</Text>
      </View>
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
            <View style={{flexDirection: 'row'}}>
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
              {/*<Text style={{color: 'white', fontSize: 18}}>14.05.2024</Text>*/}
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemContainer: {
    width: 600, // Ширина элемента равна ширине экрана
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 5,
  },
  itemText: {
    marginTop: 5,
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  paginationContainer: {
    flexDirection: 'row', // Горизонтальное расположение индикаторов пагинации
    marginTop: 10,
    marginLeft: 170,
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
