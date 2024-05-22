import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TabBar} from './src/components/TabBar/TabBar.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {ModalProvider} from './src/Context/ModalContext.tsx';

function App(): React.JSX.Element {
  /*StatusBar.setBackgroundColor('green'); //изменить верхнюю часть где заряд батарейки или сеть */
  return (
    <NavigationContainer>
      <ModalProvider>
        <SafeAreaView style={styles.containerApp}>
          <TabBar />
        </SafeAreaView>
      </ModalProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  },
});

export default App;
