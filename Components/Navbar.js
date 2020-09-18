import React, { Fragment, useContext, useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, Image, ImageBackground, TextInput, Switch } from 'react-native';


const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode(previousState => !previousState);

  makeSwitch = () => {
    return     <Switch
    trackColor={{ false: "#767577", true: "#81b0ff" }}
    thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={darkMode}
  />
  }
  
  return(
    <Fragment>
       <Header>
          <Left>
            <Button transparent>
              {makeSwitch()}
            </Button>
          </Left>
          <Body>
            <Title>My Todo List</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    </Fragment>
  )
}

export default Navbar;