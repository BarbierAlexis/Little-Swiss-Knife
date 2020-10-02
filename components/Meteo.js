import React, { useState, useEffect, useContext } from 'react';
import { Container, Text, Input } from 'native-base';
import { StyleSheet, Image, Button } from 'react-native';
import axios from 'axios';
import { CustomDarkTheme, CustomDefaultTheme } from './Theme';
import CtxDarkTheme from './CtxDarkTheme';
import { apiKeyWeather } from '../config.js';



const Weather = () => {
  const [darkTheme, setDarkTheme] = useContext(CtxDarkTheme);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const [weather, setWeather] = useState([
    {
      testName: "",
      data: null,
      name: "",
      newName: "",
      icon: "",
      windSpeed: 0,
      windDegree: 0,
      temp: 0,
      humidity: 0
    }
  ]);

  handleInfos = () => {
    if (weather.data) {
      return (
        <>
          <Text style={{...styles.text, color: theme.colors.text}}>{weather.newName}</Text>
          <Image alt="icon" source={{ uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png` }} style={styles.images} />
          <Text style={{...styles.text, color: theme.colors.text}}>{Math.round(weather.temp)}°C</Text>
          <Image alt="wind-arrow" source={require("../assets/images/arrow.png")} width="50px" style={{ transform: `rotate(${weather.windDegree}deg)` }, styles.images} />
          <Text style={{...styles.text, color: theme.colors.text}}>{Math.floor(weather.windSpeed * 3.6)}km/h</Text>
          <Image alt="humidity" source={require("../assets/images/humidity.png")} style={styles.images} />
          <Text style={{...styles.text, color: theme.colors.text}}>Humidity: {weather.humidity}%</Text>
        </>
      )
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKeyWeather}`)

        .then((response) => {
          console.log(response)
          setWeather({
            data: true,
            newName: response.data.name,
            icon: response.data.weather[0].icon,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            windDegree: response.data.wind.deg,
            windSpeed: response.data.wind.speed
          })
        })
    });
  }, []);

  handleInput = (value) => {
    setWeather({ testName: value })
  };

  searchAction = () => {

    weather.testName ? setWeather({ name: weather.testName }) : null

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather.name}&units=metric&appid=${apiKeyWeather}`)
      .then((response) => {
        console.log(response)
        setWeather({
          data: true,
          name: response.data.name,
          newName: response.data.name,
          icon: response.data.weather[0].icon,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          windDegree: response.data.wind.deg,
          windSpeed: response.data.wind.speed
        })
      })
  };

  return (
    <Container style={{...styles.container, backgroundColor: theme.colors.background}}>
      <Input onChangeText={value => handleInput(value)} placeholderTextColor={theme.colors.text} placeholder="Enter your city" style={{...styles.textInput, color: theme.colors.text}} />
      <Button title="Search" color="#ff5e5e" style={styles.searchButton} onPress={() => searchAction()} />
      {handleInfos()}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput:{
    width: "80%",
    maxHeight: 40,
    textAlign: "center", 
    margin: 20, 
    borderColor: "gray", 
    borderBottomWidth: 1
  },
  searchButton: {
    borderWidth: 1,
    height: 50,
    width: "80%",
    fontWeight: "bold",
  },
  images: {
    width: 75,
    height: 75,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  }
});

export default Weather;
