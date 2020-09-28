import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableHighlight } from 'react-native-gesture-handler';


const DrawerContent = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <Drawer.Section>
          <View style={styles.headerSection}>
            <Avatar.Image
              source={require("../assets/images/newSwissKnife.jpg")} size={220} backgroundColor={"#FFFFFF"} />
          </View>
        </Drawer.Section>
        <Drawer.Section>
          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("HomePage")}>
            <View style={styles.drawerLinks}>
              <Icon name="home" size={25} color={"#243642"}></Icon>
              <Text style={styles.linksText}>Home</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("Todos")}>
            <View style={styles.drawerLinks}>
              <Icon name="list" size={25} color={"#243642"}></Icon>
              <Text style={styles.linksText}>Todos</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("Meteo")}>
            <View style={styles.drawerLinks}>
              <Icon name="sun" size={25} color={"#243642"}></Icon>
              <Text style={styles.linksText}>Meteo</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#c4c4c4'} onPress={() => navigation.navigate("Calendar")}>
            <View style={styles.drawerLinks}>
              <Icon name="calendar" size={25} color={"#243642"}></Icon>
              <Text style={styles.linksText}>Calendar</Text>
            </View>
          </TouchableHighlight>
        </Drawer.Section>
        <View style={styles.preferences}>
          <Text style={styles.preferencesText}>Preferences</Text>
          <View style={styles.darkMode}>
            <Text style={{...styles.linksText, marginLeft: 20,}}>Dark Mode</Text>
            <Switch />
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
    fontSize: 22,
    color: "#243642"
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