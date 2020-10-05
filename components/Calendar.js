import React, { useState, useContext } from 'react';
import { Container } from 'native-base';
import { Text, StyleSheet, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { CustomDarkTheme, CustomDefaultTheme } from './Theme';
import CtxDarkTheme from './CtxDarkTheme';

const CalendarComponent = () => {
  const [darkTheme, setDarkTheme] = useContext(CtxDarkTheme);
  const newTheme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <Container style={{ ...styles.container, backgroundColor: newTheme.colors.background }}>
      <Calendar
      style = {{
        height: 450,
        width: 350
      }}
        theme = {{
          backgroundColor: newTheme.colors.background,
          calendarBackground: newTheme.colors.background,
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#ff5e5e",
          dayTextColor: newTheme.colors.text,
          textDisabledColor: "#2d4150",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#ff5e5e",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: newTheme.colors.text,
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }} />
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: "100%"
  }
});

export default CalendarComponent;