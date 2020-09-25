import React from 'react';
import { Container } from 'native-base';
import { Text, StyleSheet } from 'react-native';

const Calendar = () => {


  return (
    <Container style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
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