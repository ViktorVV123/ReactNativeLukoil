import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TabBar} from './src/components/TabBar/TabBar.tsx';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  /*StatusBar.setBackgroundColor('green'); //изменить верхнюю часть где заряд батарейки или сеть */

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.containerApp}>
        <TabBar />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
  },
});

export default App;

/*       options={({navigation}) => ({
           title: 'Home',
           headerStyle: {backgroundColor: '#071773'}, //управлеие цвета фона
           headerTintColor: 'white', //управление цветом текста
           headerRight: () => (
             <Button //можно задавать переход на другую смтраницу по кнопкеи ее цвет
               onPress={() => navigation.navigate('Details')}
               title="Go to Details"
               color="#6A8FE6"
             />
           ),
         })}*/

/*{{
  headerRight: () => <Button title={'New Page'} onPress={() => navigation.navigate('Details')} />,
  headerStyle: {backgroundColor: '#071773'},
  headerTintColor: 'white',
}}*/
