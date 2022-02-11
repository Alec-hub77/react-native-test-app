import { StyleSheet, Platform, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ReloadIcon = ({load}) => {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
  return (
    <View style={styles.icon}>
      <Ionicons onPress={load} name={reloadIconName} size={36} color='black' />
    </View>
  )
}

export default ReloadIcon

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 60,
        right: 20,
    }
})