import React, { useContext, useState, useEffect } from 'react';
import CtxTodo from './CtxTodo';
import CtxDarkTheme from './CtxDarkTheme';

import { CustomDarkTheme, CustomDefaultTheme } from './Theme';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableHighlight } from 'react-native-gesture-handler';


const DrawerContent = ({ navigation }) => {
  const [darkTheme, setDarkTheme] = useContext(CtxDarkTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() =>{
    setDarkTheme(isDarkTheme)
  }, [isDarkTheme]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <DrawerContentScrollView>
        <Drawer.Section>
          <View style={styles.headerSection}>
            <Text style={{...styles.linksText, marginLeft: 0 }}>Little Swiss Knife</Text>
            {theme.image ? <Avatar.Image
              source={theme.image} size={220} backgroundColor={theme.colors.background} /> 
              : null }
          </View>
        </Drawer.Section>
        <Drawer.Section>
          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("HomePage")}>
            <View style={styles.drawerLinks}>
              <Icon name="home" size={25} color={theme.colors.drawerText}></Icon>
              <Text style={{...styles.linksText, color: theme.colors.drawerText}}>Home</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("Todos")}>
            <View style={styles.drawerLinks}>
              <Icon name="list" size={25} color={theme.colors.drawerText}></Icon>
              <Text style={{...styles.linksText, color: theme.colors.drawerText}}>Todos</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("Weather")}>
            <View style={styles.drawerLinks}>
              <Icon name="sun" size={25} color={theme.colors.drawerText}></Icon>
              <Text style={{...styles.linksText, color: theme.colors.drawerText}}>Weather</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("Calendar")}>
            <View style={styles.drawerLinks}>
              <Icon name="calendar" size={25} color={theme.colors.drawerText}></Icon>
              <Text style={{...styles.linksText, color: theme.colors.drawerText}}>Calendar</Text>
            </View>
          </TouchableHighlight>
        </Drawer.Section>
        <View style={styles.preferences}>
          <Text style={styles.preferencesText}>Preferences</Text>
          <View style={styles.darkMode}>
            <Text style={{...styles.linksText, marginLeft: 20, color: theme.colors.drawerText}}>Dark Mode</Text>
            <Switch value={isDarkTheme} onValueChange={() => setIsDarkTheme(!isDarkTheme)}/>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
  },
  drawerLinks: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    margin: 20,
  },
  linksText: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 21
  },
  preferences: {
    flex: 1,
    paddingLeft: 20,
    marginTop: 10
  },
  preferencesText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#999999",
  },
  darkMode: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingRight: 20
  },
});

export default DrawerContent;