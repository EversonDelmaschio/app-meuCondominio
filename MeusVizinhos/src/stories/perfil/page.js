import React from 'react'

import {
  View,
  Text
} from 'react-native'


class PerfilPage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>Perfil</Text>
      </View>
    )
  }
}


export default (PerfilPage)
