import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {CalendarIcon} from '../../../icons/MeetingIcon/CalendarIcon.tsx';
import {CalendarTwo} from '../../../icons/MeetingIcon/CalendarTwo.tsx';

export const SortingMeet = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        {/* <CalendarIcon />*/}
        <CalendarTwo />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date" // Указываем, что нужно выбирать только дату
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
