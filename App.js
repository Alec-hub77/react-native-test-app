import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import * as Location from 'expo-location';

import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import ReloadIcon from './components/ReloadIcon';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);
  const [unitSystem, setUnitSystem] = useState('metric');

  const WEATHER_API_KEY = '0d5848b4da1ac8999dd26fe81c671c98';
  const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

  useEffect(() => {
    load();
  }, [unitSystem]);

  const load = async () => {
    setWeather(null);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLocation(location);

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`;

      const weatherRequest = await fetch(weatherUrl);
      const response = await weatherRequest.json();

      if (weatherRequest.ok) {
        setWeather(response);
      } else {
        setErrorMsg(response.message);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  if (weather) {
    return (
      <>
        <View contentContainerStyle={styles.container}>
          <ReloadIcon load={load} />
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <StatusBar style="auto" />
          <View style={styles.main}>
            <WeatherInfo weather={weather} />
          </View>
        </View>
        <WeatherDetails weather={weather} />
      </>
    );
  } else if (errorMsg) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <View>{errorMsg}</View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.containerInicator}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 150,
  },
  containerInicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
