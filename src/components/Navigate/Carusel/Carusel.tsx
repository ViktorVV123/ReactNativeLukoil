import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Получаем ширину экрана для использования в стиле элементов карусели
const {width: screenWidth} = Dimensions.get('window');

export const Carusel = () => {
  // Массив данных, содержащий текст и заметки для каждого элемента карусели
  const task = [
    {text: 'Item 1', note: 'Note 1'},
    {text: 'Item 2', note: 'Note 2'},
    {text: 'Item 3', note: 'Note 3'},
    {text: 'Item 4', note: 'Note 4'},
    {text: 'Item 5', note: 'Note 5'},
  ];
  // Используем useState для управления состоянием активного индекса
  const [activeIndex, setActiveIndex] = useState(0);

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
  const renderItem = ({item}: {item: {text: string}}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      {/* FlatList для отображения карусели */}
      <FlatList
        data={task} // Данные для карусели
        renderItem={renderItem} // Функция рендеринга элемента
        horizontal // Горизонтальная прокрутка
        pagingEnabled // Постраничная прокрутка
        showsHorizontalScrollIndicator={false} // Отключение горизонтального индикатора прокрутки
        keyExtractor={(item, index) => index.toString()} // Уникальный ключ для каждого элемента
        onViewableItemsChanged={onViewRef.current} // Обработчик изменения видимых элементов
        viewabilityConfig={viewConfigRef.current} // Конфигурация видимости
        ref={flatListRef} // Ссылка на FlatList
      />
      {/* Контейнер для пагинации */}
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
            onPress={() => {
              // Прокрутка к выбранному индексу
              flatListRef.current?.scrollToIndex({index});
            }}
          />
        ))}
      </View>
      {/* Контейнер для заметок */}
      <View style={styles.notesContainer}>
        <Text style={styles.noteText}>{data[activeIndex].note}</Text>
      </View>
    </View>
  );
};

// Стили для компонента
const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: screenWidth, // Ширина элемента равна ширине экрана
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: '#1f1f1f',
    marginBottom: 100,
  },
  inactiveDot: {
    backgroundColor: '#c71f1f',
  },
  notesContainer: {
    marginTop: 10,
  },
  noteText: {
    fontSize: 16,
    color: 'gray',
  },
});
