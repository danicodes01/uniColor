import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === =15, -15
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        return
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change)
        return
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return
      default:
        return
    }
  }

  return (
    <View>
      <View
        style={{
          height: 320,
          width: 400,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      ></View>
      <ColorCounter
        color='Red'
        curr={red}
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        curr={green}
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        curr={blue}
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
