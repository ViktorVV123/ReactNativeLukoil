import * as React from 'react';
import {Switch, View, StyleSheet} from 'react-native';
import {useState} from 'react';

export const SwitchIcon = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#cbc8c8'}}
        thumbColor={isEnabled ? '#f6f6f5' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
