import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

export const Calendars = ({cases}: {cases: any}) => {
  LocaleConfig.locales.ru = {
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    monthNamesShort: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    dayNames: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ],
    dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    today: 'Сегодня',
  };
  LocaleConfig.defaultLocale = 'ru';

  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (cases[today]) {
      setSelectedDate(today);
    }
  }, [cases]);

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const getMarkedDates = () => {
    let markedDates = {};
    Object.keys(cases).forEach(date => {
      markedDates[date] = {
        dots: cases[date].tasks.map(task => ({
          key: task.text,
          color: cases[date].dotColor,
        })),
      };
    });

    if (selectedDate) {
      markedDates[selectedDate] = {
        ...markedDates[selectedDate],
        selected: true,
        selectedColor: '#d32f2f',
      };
    }

    return markedDates;
  };

  return (
    <View style={styles.container}>
      <View style={{width: '45%'}}>
        <Calendar
          style={{marginLeft: 30, padding: 20}}
          current={new Date().toISOString().split('T')[0]}
          onDayPress={onDayPress}
          disableMonthChange={true}
          enableSwipeMonths={true}
          markedDates={getMarkedDates()}
          markingType={'multi-dot'}
          theme={{
            calendarBackground: '#212121',
            textSectionTitleColor: '#ffffff',
            dayTextColor: '#ffffff',
            todayTextColor: '#ff0000',
            selectedDayBackgroundColor: '#d32f2f',
            selectedDayTextColor: '#ffffff',
            monthTextColor: '#ffffff',
            arrowColor: '#212121',
            textDisabledColor: '#555555',
          }}
        />
      </View>
      <View style={{width: '50%'}}>
        {selectedDate && cases[selectedDate] && cases[selectedDate].tasks ? (
          <View style={styles.tasksContainer}>
            {cases[selectedDate].tasks.map((task: any, index: string) => (
              <View key={index} style={styles.task}>
                <View
                  style={{
                    width: 3,
                    height: '100%',
                    backgroundColor: '#36a6c0',
                    marginRight: 7,
                  }}
                />
                <View>
                  <Text style={styles.taskText}>{task.text}</Text>
                  <Text style={styles.taskTime}>{task.time}</Text>
                  <Text style={styles.taskCategory}>{task.category}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.tasksContainer}>
            <Text style={styles.emptyText}>Нет назначенных совещаний</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2E2E2E',
    flex: 1,
    flexDirection: 'row',
  },
  tasksContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#363636',
    borderRadius: 5,
    width: '95%',
    marginLeft: '5%',
  },
  tasksTitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  task: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  taskText: {
    fontSize: 17,
    color: '#ffffff',
  },
  taskTime: {
    fontSize: 16,
    color: '#bbbbbb',
  },
  taskCategory: {
    marginTop: 6,
    fontSize: 13,
    color: '#888888',
    borderRadius: 7,
    borderColor: '#9397AC',
    borderWidth: 1,
    width: '25%',
    padding: 3,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#bbbbbb',
  },
});
