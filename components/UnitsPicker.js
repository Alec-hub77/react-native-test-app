import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-community/picker'

const UnitsPicker = ({unitSystem, setUnitSystem}) => {

  return (
    <View style={styles.unitSystem}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode='dropdown'
      >
          <Picker.Item label='C&deg;' value='metric'/>
          <Picker.Item label='F&deg;' value='imperial'/>
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
    unitSystem: {
        position: 'absolute',
        height: 50,
        width: 100,
        top: 10,
        left: 20,
        zIndex: 2,
        ...Platform.select({
            ios: {
                top: -30,
            },
            android: {
                top: 20
            }
        }),
    }
})

export default UnitsPicker;
