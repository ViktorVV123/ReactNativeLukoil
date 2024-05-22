import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SwapButton} from './SwapButton.tsx';
import {CardComponent} from './CardComponent.tsx';

export function EstatesNavigate() {
  return (
    <View style={styles.containerApp}>
      <View>
        <SwapButton />
      </View>
     {/* <View>
        <CardComponent />
      </View>*/}
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
});
