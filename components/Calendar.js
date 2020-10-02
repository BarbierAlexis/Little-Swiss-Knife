import React, { useState, useContext } from 'react';
import { Container } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import { CustomDarkTheme, CustomDefaultTheme } from './Theme';
import CtxDarkTheme from './CtxDarkTheme';

const Calendar = () => {
  const [darkTheme, setDarkTheme] = useContext(CtxDarkTheme);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <Container style={{...styles.container, backgroundColor: theme.colors.background}}>
      <Text style={{...styles.text, color: theme.colors.text}}>Calendar</Text>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
});

export default Calendar;