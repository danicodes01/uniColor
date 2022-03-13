import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const ColorCounter = ({ color, onIncrease, onDecrease, curr }) => {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.text}>
        {color}: #{curr}
      </Text>
      <Button title={`➕`} onPress={onIncrease}></Button>
      <Button title={`➖`} onPress={onDecrease}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyles: {
    borderWidth: 0.5,
    borderColor: '#40514e',
    padding: 2.5
  },
  text: {}
})

export default ColorCounter
