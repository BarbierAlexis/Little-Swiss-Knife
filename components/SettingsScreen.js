import React from 'react';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {


  return (
    <Container style={styles.container}>
     <Text style={styles.text}>Settings Page</Text>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33c2ea',
  },
  text: {
    color: '#ffffff'
  }
});

export default SettingsScreen;