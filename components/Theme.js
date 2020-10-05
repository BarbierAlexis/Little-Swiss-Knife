import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

const CustomDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
      background: "#1D2636",
      headerBackground: "#0F1724",
      headerText: "#ffffff",
      text: "#ffffff",
      drawerText: "#ffffff",
      drawerOverlay: "#0F1724",
      emptyText: "#999999",
      emptyText2: "#c4c4c4",
      shadowColor: "#ffffff",
      modalButtons: "#0F1724",
      trashIcon: "#ff5e5e",
      closeText: "#ffffff"
    },
    image: require("../assets/images/darkKnife.jpg")
  };

  const CustomDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      ...NavigationDefaultTheme.colors,
      background: "#ffffff",
      headerBackground: "#ff5e5e",
      headerText: "#ffffff",
      text: "#1D2636",
      drawerText: "#1D2636",
      drawerOverlay: "#ff5e5e",
      emptyText: "#999999",
      emptyText2: "#c4c4c4",
      shadowColor: "#000000",
      modalButtons: "#ff5e5e",
      trashIcon: "#ff5e5e",
      closeText: "#999999"
    },
    image: require("../assets/images/lightKnife.jpg")
  };

  export {CustomDarkTheme, CustomDefaultTheme};