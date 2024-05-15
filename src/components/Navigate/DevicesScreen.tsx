import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function DevicesScreen({navigation}: {navigation: any}) {
  const handlePress = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <View style={styles.containerApp}>
      <TouchableOpacity
        onPress={() => handlePress('https://oko.pro.lukoil.com/')}>
        <Text style={{color: 'white', fontSize: 25}}>NONONONO</Text>
      </TouchableOpacity>
      {/*  <Text style={styles.text}>Details Screen1</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e1f83',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
});
