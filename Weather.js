import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons" // expo가 아니면 yarn이나 npm으로 설치해야함
// https://expo.github.io/vector-icons/
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors:["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "For more info look outside",
    icon: 'weather-rainy'
  },
  Clear:{
    colors:["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Go to the park",
    icon: 'weather-sunny'
  },
  Thunderstorm:{
    colors:["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Actually, outside of the house",
    icon: 'weather-lightning'
  },
  Clouds:{
    colors:["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, boring",
    icon: 'weather-cloudy'
  },
  Snow:{
    colors:["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Make a snow man",
    icon: 'weather-snowy'
  },
  Drizzle:{
    colors:["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, ..",
    icon: 'weather-hail'
  },
  Haze:{
    colors:["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "I don't know what haze is",
    icon: 'weather-fog'
  },
  Mist:{
    colors:["#89F7FE", "#66A6FF"],
    title: "Mist",
    subtitle: "I don't know what mist is too",
    icon: 'weather-fog'
  }
}
function Weather({weatherName, temp}){
  return(
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons 
        color="white" 
        size={144} 
        name={weatherCases[weatherName].icon}/>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired
}
export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper:{
    flex:1,
    alignItems:"center",
    backgroundColor: "transparent",
    justifyContent:"center"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems:"flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title:{
    fontSize: 34,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
})
