
import { createStackNavigator } from 'react-navigation'

import ComercioPage from './page'

const Stack = createStackNavigator(
  {
    ComercioPage: {
      screen: ComercioPage,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'ComercioPage'
  }
)

export default Stack
