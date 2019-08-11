
import { createStackNavigator } from 'react-navigation'

import perfilPage from './page'

const Stack = createStackNavigator(
  {
    perfilPage: {
      screen: perfilPage,
      navigationOptions: ({ navigation }) => {
        return {
          header: null
        }
      }
    }
  },
  {
    initialRouteName: 'perfilPage'
  }
)

export default Stack
