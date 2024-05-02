import React from 'react';
import {Button, Text, View} from 'react-native';

export const TwoPage = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>123</Text>
      <Button title={'TWOpAGE'} onPress={() => navigation.goBack} />
    </View>
  );
};
