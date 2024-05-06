import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {TabBar} from './src/components/TabBar/TabBar.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from './src/components/DetailsScreen/DetailsScreen.tsx';
import {HomeTab} from './src/components/HomeTab/HomeTab.tsx';
import {CloudIcon} from './src/icons/HeaderIcon/CloudIcon.tsx';
import {MenuIcon} from './src/icons/HeaderIcon/MenuIcon.tsx';
import {ChartIcon} from './src/icons/HeaderIcon/ChartIcon.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const commonHeaderOptions = {
    headerStyle: {backgroundColor: '#06165e'},
    headerTintColor: 'white',
    headerRight: () => (
      <View style={{flexDirection: 'row', marginRight: 5}}>
        <View style={{marginRight: 10}}>
          <CloudIcon />
        </View>
        <View>
          <ChartIcon />
        </View>
      </View>
    ),
    headerLeft: () => (
      <View style={{marginRight: 10}}>
        <MenuIcon />
      </View>
    ),
    headerTitleStyle: {fontSize: 23},
    headerTitleAlign: 'left',
  };
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.containerApp}>
        <Stack.Navigator
          initialRouteName="Home"
          // @ts-ignore
          screenOptions={commonHeaderOptions}>
          <Stack.Screen name="Home" component={HomeTab} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
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
