import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

const WeatherInfo = ({ weather }) => {
  const { main } = weather;

  const iconUrl = 'http://openweathermap.org/img/wn/10d@2x.png';

  return (
    <>
      {weather?.weather?.map((item) => (
        <View key={item.id} style={styles.infoContainer}>
          <Text style={styles.name}>{weather?.name}</Text>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${item?.icon}@4x.png`,
            }}
          />
          <View style={styles.unitContainer}>
            <Text style={main?.temp > 0 ? styles.unit : styles.unitBlue}>
              {Math.round(main?.temp)}&deg;
            </Text>
          </View>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.mainWeather}>{item.main}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  unitContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  unit: {
    fontSize: 48,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  unitBlue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: SECONDARY_COLOR,
  },
  mainWeather: {
    fontSize: 20,
    fontWeight: '500',
    color: SECONDARY_COLOR,
    marginTop: 10,
  },
  desc: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
});

export default WeatherInfo;