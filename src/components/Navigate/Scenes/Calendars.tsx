import React, {useState} from 'react';
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

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '40%', marginLeft: '5%'}}>
        <Calendar
          // Текущий месяц
          current={new Date().toISOString().split('T')[0]} // Обработчик нажатий на день
          onDayPress={onDayPress} // Отключение навигации по месяцам через нажатие на дни других месяцев
          disableMonthChange={true} // Включение свайпов между месяцами
          enableSwipeMonths={true} // Отметка выбранных дат
          markedDates={{
            ...cases,
            [selectedDate]: {selected: true, selectedColor: '#d32f2f'},
          }}
          theme={{
            backgroundColor: '#000000',
            calendarBackground: '#000000',
            textSectionTitleColor: '#ffffff',
            dayTextColor: '#ffffff',
            todayTextColor: '#ff0000',
            selectedDayBackgroundColor: '#d32f2f',
            selectedDayTextColor: '#ffffff',
            monthTextColor: '#ffffff',
            arrowColor: '#ffffff',
            textDisabledColor: '#555555',
          }}
        />
      </View>
      <View style={{width: '55%'}}>
        {selectedDate && cases[selectedDate] && cases[selectedDate].tasks && (
          <View style={styles.tasksContainer}>
            <Text style={styles.tasksTitle} />
            {cases[selectedDate].tasks.map(
              (task: [text: any], index: string) => {
                return (
                  <View key={index}>
                    <Text style={styles.taskText}>{task.text}</Text>
                    <Text style={styles.taskText}>{task.time}</Text>
                    <Text style={styles.taskText}>{task.category}</Text>
                  </View>
                );
              },
            )}
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
    backgroundColor: '#333',
    borderRadius: 5,
    width: '90%',
    marginLeft: '5%',
  },
  tasksTitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 14,
    color: '#ffffff',
  },
});
