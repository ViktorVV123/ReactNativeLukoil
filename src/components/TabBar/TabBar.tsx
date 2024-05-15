import React from 'react';
import {View} from 'react-native';
import {DevicesIcon} from '../../icons/TabBarIcon/DevicesIcon.tsx';
import {EstatesIcon} from '../../icons/TabBarIcon/EstatesIcon.tsx';
import {HomeIcon} from '../../icons/TabBarIcon/HomeIcon.tsx';
import {ScenesIcon} from '../../icons/TabBarIcon/ScenesIcon.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab} from '../HomeTab/HomeTab.tsx';
import {DevicesScreen} from '../Navigate/DevicesScreen.tsx';
import {ScenesNavigate} from '../Navigate/Scenes/ScenesNavigate.tsx';
import {EstatesNavigate} from '../Navigate/EstatesNavigate.tsx';
import {CloudIcon} from '../../icons/HeaderIcon/CloudIcon.tsx';
import {ChartIcon} from '../../icons/HeaderIcon/ChartIcon.tsx';
import {MenuIcon} from '../../icons/HeaderIcon/MenuIcon.tsx';

const defaultHeaderStyles = {
  headerStyle: {backgroundColor: '#000000'},
  headerTintColor: 'white',
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 5}}>
      <View style={{marginRight: 10, marginLeft: 20}}>
        <CloudIcon />
      </View>
      <View style={{marginRight: 20}}>
        <ChartIcon />
      </View>
    </View>
  ),
  headerLeft: () => (
    <View style={{marginRight: 10, marginLeft: 20}}>
      <MenuIcon />
    </View>
  ),
  headerTitleStyle: {fontSize: 23},
  headerTitleAlign: 'left',
};

export const TabBar = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#b6b4b4',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          position: 'absolute',
          padding: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
          ...defaultHeaderStyles,
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DevicesScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <DevicesIcon fill={color} />
          ),
          ...defaultHeaderStyles,
        }}
      />
      <Tab.Screen
        name="Scenes"
        component={ScenesNavigate}
        options={{
          tabBarIcon: ({color}: {color: string}) => <ScenesIcon fill={color} />,
          ...defaultHeaderStyles,
        }}
      />
      <Tab.Screen
        name="Estates"
        component={EstatesNavigate }
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <EstatesIcon fill={color} />
          ),
          ...defaultHeaderStyles,
        }}
      />
    </Tab.Navigator>
  );
};
/*const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#6A8FE6',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    bottom: -5,
    right: 0,
    padding: 5,
  },
  containerIcon: {
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});*/
