import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/index';
import {
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR, GRAY } = colors;
const WeatherDetails = ({ weather }) => {
  const { main } = weather;
  console.log(weather);
  console.log(main);

  return (
    <View style={styles.details}>
      <View style={styles.row}>
        <View style={styles.box}>
          <View style={styles.row}>
            <FontAwesome5
              name="temperature-low"
              size={30}
              color={main.feels_like > 0 ? PRIMARY_COLOR : SECONDARY_COLOR}
            />
            <View style={styles.detailElement}>
              <Text style={styles.feels}>Feels Like</Text>
              <Text style={styles.unit}>
                {Math.round(main.feels_like)} &deg;C
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bl}></View>
        <View style={styles.box}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="water-percent"
              size={35}
              color={SECONDARY_COLOR}
            />
            <View style={styles.detailElement}>
              <Text style={styles.feels}>Humidity</Text>
              <Text style={styles.unit}>{main.humidity}%</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={styles.lineH}></View> */}
      <View style={styles.row}>
        <View style={styles.box}>
          <View style={styles.row}>
            <FontAwesome5 name="wind" size={25} color={SECONDARY_COLOR} />
            <View style={styles.detailElement}>
              <Text style={styles.feels}>Wind speed</Text>
              <Text style={styles.unit}>{weather.wind.speed}m/s</Text>
            </View>
          </View>
        </View>
        <View style={styles.bl}></View>
        <View style={styles.box}>
          <View style={styles.row}>
            <SimpleLineIcons
              name="speedometer"
              size={30}
              color={SECONDARY_COLOR}
            />
            <View style={styles.detailElement}>
              <Text style={styles.feels}>Pressure</Text>
              <Text style={styles.unit}>{main.pressure}hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  details: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    padding: 20,
  },
  detailElement: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  feels: {
    fontSize: 12,
    color: GRAY,
  },
  unit: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GRAY,
  },
  bl: {
    width: 1,
    height: '100%',
    backgroundColor: GRAY,
    padding: 0,
    margin: 0,
  },
  lineH: {
    height: 1,
    width: '100%',
    backgroundColor: GRAY,
  },
});