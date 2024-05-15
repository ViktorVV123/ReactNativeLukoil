import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function EstatesNavigate() {
  const news = [
    {
      new: 'ЛУКОЙЛ и Ямало-Ненецкий автономный округ подписали дополнительное соглашение о сотрудничестве',
    },
    {
      new: 'В Астрахани при поддержке ЛУКОЙЛа выпустили книгу о художнике С. Мочалове',
    },
    {
      new: 'На Нижегородском НПЗ ЛУКОЙЛа состоялся чемпионат по настольному теннису',
    },
    {
      new: 'Команда ЛУКОЙЛ-Западной Сибири стала победителем соревнований по баскетболу трудовых коллективов Когалыма',
    },
    {
      new: 'В Усинске при содействии ЛУКОЙЛа прошёл межрегиональный турнир по хоккею',
    },
  ];
  return (
    <View style={styles.containerApp}>
      <ScrollView>
        <View style={styles.containerNew}>
          {news.map((item, index) => (
            <LinearGradient
              key={index}
              colors={['#444', '#222']}
              style={styles.square}>
              <Text style={styles.textStyle}>{item.new}</Text>
            </LinearGradient>
          ))}
        </View>
        <View style={styles.containerNew}>
          {news.map((item, index) => (
            <View key={index} style={styles.square1}>
              <Text style={styles.textStyle1}>{item.new}</Text>
            </View>
          ))}
        </View>
        <View />
        <View style={styles.containerNew}>
          {news.map((item, index) => (
            <View style={styles.square2}>
              <Text key={index} style={styles.textStyle2}>
                {item.new}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.containerNew3}>
          {news.map((item, index) => (
            <View style={styles.square3}>
              <Text key={index} style={styles.textStyle3}>
                {item.new}
              </Text>
            </View>
          ))}
        </View>
        <View />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#2e2e2e', // Темный фон
    padding: 20,
  },
  containerNew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  square: {
    width: 150,
    height: 165,
    /*aspectRatio: 1, // Соотношение сторон 1:1*/
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  textStyle: {
    fontSize: 14,
    color: '#FFF', // Цвет текста
    textAlign: 'center',
    padding: 5,
  },
  square1: {
    width: 175,
    aspectRatio: 1, // Соотношение сторон 1:1
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#5b5959',
  },
  textStyle1: {
    fontSize: 14,
    color: '#FFF', // Цвет текста
    textAlign: 'center',
    padding: 5,
  },
  square2: {
    width: 175,
    aspectRatio: 1, // Соотношение сторон 1:1
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textStyle2: {
    fontSize: 14,
    color: '#FFF', // Цвет текста
    textAlign: 'left',
    padding: 5,
  },
  containerNew3: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  square3: {

  },
  textStyle3: {
    fontSize: 14,
    color: '#FFF', // Цвет текста
    textAlign: 'left',
    padding: 5,
  },
});
