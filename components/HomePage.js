import React from 'react';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {


  return (
    <Container style={styles.container}>
     <Text style={styles.text}>HomePage</Text>
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

export default HomePage;