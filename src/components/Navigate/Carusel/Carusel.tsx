import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const data = [
  {text: 'Item 1', note: 'Note 1'},
  {text: 'Item 2', note: 'Note 2'},
  {text: 'Item 3', note: 'Note 3'},
  {text: 'Item 4', note: 'Note 4'},
  {text: 'Item 5', note: 'Note 5'},
];

export const Carusel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewRef = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const renderItem = ({item}: {item: {text: string}}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        ref={flatListRef}
      />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
            onPress={() => {
              flatListRef.current?.scrollToIndex({index});
            }}
          />
        ))}
      </View>
      <View style={styles.notesContainer}>
        <Text style={styles.noteText}>{data[activeIndex].note}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
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
    marginBottom: 200,
  },
  inactiveDot: {
    backgroundColor: '#be1919',
  },
  notesContainer: {
    marginTop: 10,
  },
  noteText: {
    fontSize: 16,
    color: 'gray',
  },
});
