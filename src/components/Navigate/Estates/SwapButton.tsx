import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {PlusIcon} from '../../../icons/AnimatedIcon/PlusIcon.tsx';
import {CloudIcon} from '../../../icons/HeaderIcon/CloudIcon.tsx';
import {ChartIcon} from '../../../icons/HeaderIcon/ChartIcon.tsx';
import {HomeIcon} from '../../../icons/TabBarIcon/HomeIcon.tsx';

export const SwapButton = () => {
  const [icon_1] = useState(new Animated.Value(1240)); // Начальное положение icon_1
  const [icon_2] = useState(new Animated.Value(1170)); // Начальное положение icon_2
  const [icon_3] = useState(new Animated.Value(100000)); // Начальное положение icon_2

  const [open, setOpen] = useState(false);

  const openIn = () => {
    setOpen(true);
    Animated.timing(icon_1, {
      toValue: 498, // Двигаем немного вверх
      duration: 500,
      useNativeDriver: false,
    }).start();
    setOpen(true);
    Animated.timing(icon_2, {
      toValue: 425, // Двигаем немного вверх
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 353, // Двигаем немного вверх
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeIn = () => {
    setOpen(false);
    Animated.timing(icon_1, {
      toValue: 1000, // Возвращаем на начальное положение
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 1000, // Возвращаем на начальное положение
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 1000, // Возвращаем на начальное положение
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const toggleIcons = () => {
    if (!open) {
      openIn();
    } else {
      closeIn();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={closeIn}>
      <View style={styles.container}>
        <Animated.View style={[styles.circleM, {top: icon_1}]}>
          <TouchableOpacity>
            <CloudIcon />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.circleM, {top: icon_2, right: icon_2}]}>
          <TouchableOpacity>
            <ChartIcon />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.circleM, {top: icon_3, right: icon_3}]}>
          <TouchableOpacity>
            <HomeIcon fill={'white'} />
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity onPress={toggleIcons} style={styles.circle}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
  },
  circle: {
    borderRadius: 30,
    position: 'absolute',
    width: 45,
    height: 45,
    top: 570,
    left: 1210,
    backgroundColor: '#EF3248',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleM: {
    borderRadius: 30,
    position: 'absolute',
    width: 60,
    height: 60,
    top: 400,
    left: 1190,
    backgroundColor: '#EF3248',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
