import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HomeTab} from './src/components/HomeTab/HomeTab.tsx';
import {HeaderTab} from './src/components/Header/HeaderTab.tsx';
import {TabBar} from './src/components/TabBar/TabBar.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.containerApp}>
      <HeaderTab />
      <HomeTab />
      <TabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
  },
});

export default App;
