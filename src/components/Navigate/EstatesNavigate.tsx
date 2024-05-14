import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
      <View style={styles.containerNew}>
        {news.map((item, index) => (
          <Text style={styles.textStyle} key={index}>
            {item.new}
          </Text>
        ))}
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#2E2E2E',
    flexDirection: 'row',
  },
  containerNew: {
    backgroundColor: '#504f4f',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
  },
  textStyle: {
    marginLeft: 50,
    borderColor: 'black',
    fontSize: 15,
    color: 'white',
  },
});
