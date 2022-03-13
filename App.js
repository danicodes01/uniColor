import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SquareScreen from './src/screens/SquareScreen'

const navigator = createStackNavigator({
  Square: SquareScreen,
}, {
  initialRouteName: 'Square',
  defaultNavigationOptions: {
    title: 'Color🌈Picker🦄'
  }
})

export default createAppContainer(navigator)


