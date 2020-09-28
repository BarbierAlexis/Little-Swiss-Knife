import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Root } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import CtxTodo from './components/CtxTodo';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerContent from './components/DrawerContent';
import HomePage from './components/HomePage';
import Todos from './components/Todos';
import Meteo from './components/Meteo';
import Calendar from './components/Calendar';


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const TodosStack = createStackNavigator();
const MeteoStack = createStackNavigator();
const CalendarStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomePage} options={{
      title: "Organize Me",
      headerStyle: {
        backgroundColor: "#ff5e5e",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 23
      },
      headerRight: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#ff5e5e" color="#ffffff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

const TodosStackScreen = ({ navigation }) => (
  <TodosStack.Navigator>
    <TodosStack.Screen name="Todos" component={Todos} options={{
      title: "Organize Me",
      headerStyle: {
        backgroundColor: "#ff5e5e",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 23
      },
      headerRight: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#ff5e5e" color="#ffffff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </TodosStack.Navigator>
);

const MeteoStackScreen = ({ navigation }) => (
  <MeteoStack.Navigator>
    <MeteoStack.Screen name="Meteo" component={Meteo} options={{
      title: "Organize Me",
      headerStyle: {
        backgroundColor: "#ff5e5e",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#ff5e5e" color="#ffffff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </MeteoStack.Navigator>
);

const CalendarStackScreen = ({ navigation }) => (
  <CalendarStack.Navigator>
    <CalendarStack.Screen name="Calendar" component={Calendar} options={{
      title: "Organize Me",
      headerStyle: {
        backgroundColor: "#ff5e5e",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#ff5e5e" color="#ffffff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </CalendarStack.Navigator>
);

const App = () => {
  const [todos, setTodos] = useState([]);



  return (
    <Root>
      <CtxTodo.Provider value={[todos, setTodos]}>
        <NavigationContainer style={styles.container}>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} initialRouteName="Home" overlayColor="#ff5e5e" drawerType="front" hideStatusBar={true}>
            <Drawer.Screen name="HomePage" component={HomeStackScreen} />
            <Drawer.Screen name="Todos" component={TodosStackScreen} />
            <Drawer.Screen name="Meteo" component={MeteoStackScreen} />
            <Drawer.Screen name="Calendar" component={CalendarStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </CtxTodo.Provider>
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
