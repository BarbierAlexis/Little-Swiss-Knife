import React, { Fragment, useContext, useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, Image, ImageBackground, TextInput, Switch } from 'react-native';


const Navbar = () => {

  const toggleSwitch = () => setDarkMode(previousState => !previousState);



  return (
    <Fragment>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='home' />
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