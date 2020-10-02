import React, {useContext} from 'react';
import { CustomDarkTheme, CustomDefaultTheme } from './Theme';
import CtxDarkTheme from './CtxDarkTheme';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {
  const [darkTheme, setDarkTheme] = useContext(CtxDarkTheme);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <Container style={{...styles.container, backgroundColor: theme.colors.background}}>
     <Text style={{...styles.text, color: theme.colors.text}}>HomePage</Text>
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