import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

const CustomDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
      background: "#243642",
      headerBackground: "#1C1C1C",
      headerText: "#ffffff",
      text: "#ffffff",
      drawerText: "#ffffff",
      drawerOverlay: "#1C1C1C",
      emptyText: "#999999",
      emptyText2: "#c4c4c4",
      shadowColor: "#ffffff",
      modalButtons: "#1C1C1C",
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
      text: "#243642",
      drawerText: "#243642",
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