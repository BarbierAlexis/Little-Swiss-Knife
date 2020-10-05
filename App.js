import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Root } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomDarkTheme, CustomDefaultTheme } from './components/Theme';

import CtxTodo from './components/CtxTodo';
import CtxDarkTheme from './components/CtxDarkTheme';


import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';


import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerContent from './components/DrawerContent';
import HomePage from './components/HomePage';
import Todos from './components/Todos';
import Weather from './components/Weather';
import CalendarComponent from './components/Calendar';
import { ThemeContext } from 'react-navigation';


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const TodosStack = createStackNavigator();
const WeatherStack = createStackNavigator();
const CalendarStack = createStackNavigator();


const App = () => {

  const [todos, setTodos] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomePage} options={{
        title: "Little Swiss Knife",
        headerStyle: {
          backgroundColor: theme.colors.headerBackground,
        },
        headerTintColor: theme.colors.headerText,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23
        },
        headerRight: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor={theme.colors.headerBackground} color={theme.colors.headerText} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
  );

  const TodosStackScreen = ({ navigation }) => (
    <TodosStack.Navigator>
      <TodosStack.Screen name="Todos" component={Todos} options={{
        title: "Little Swiss Knife",
        headerStyle: {
          backgroundColor: theme.colors.headerBackground,
        },
        headerTintColor: theme.colors.headerText,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23
        },
        headerRight: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor={theme.colors.headerBackground} color={theme.colors.headerText} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </TodosStack.Navigator>
  );

  const WeatherStackScreen = ({ navigation }) => (
    <WeatherStack.Navigator>
      <WeatherStack.Screen name="Weather" component={Weather} options={{
        title: "Little Swiss Knife",
        headerStyle: {
          backgroundColor: theme.colors.headerBackground,
        },
        headerTintColor: theme.colors.headerText,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23
        },
        headerRight: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor={theme.colors.headerBackground }color={theme.colors.headerText} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </WeatherStack.Navigator>
  );

  const CalendarStackScreen = ({ navigation }) => (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="Calendar" component={CalendarComponent} options={{
        title: "Little Swiss Knife",
        headerStyle: {
          backgroundColor: theme.colors.headerBackground,
        },
        headerTintColor: theme.colors.headerText,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23
        },
        headerRight: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor={theme.colors.headerBackground} color={theme.colors.headerText} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </CalendarStack.Navigator>
  );

  return (
    <Root>
      <CtxDarkTheme.Provider value={[darkTheme, setDarkTheme]}>
        <CtxTodo.Provider value={[todos, setTodos]}>
          <PaperProvider theme={theme}>
            <NavigationContainer theme={theme} style={styles.container}>
              <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Home" overlayColor={theme.colors.drawerOverlay} drawerType="front" hideStatusBar={true}>
                <Drawer.Screen name="HomePage" component={HomeStackScreen} />
                <Drawer.Screen name="Todos" component={TodosStackScreen} />
                <Drawer.Screen name="Weather" component={WeatherStackScreen} />
                <Drawer.Screen name="Calendar" component={CalendarStackScreen} />
              </Drawer.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </CtxTodo.Provider>
      </CtxDarkTheme.Provider>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
