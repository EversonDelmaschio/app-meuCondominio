import React from 'react'

import {
  View,
  Text
} from 'react-native'


class CondominioPage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>Condominio</Text>
      </View>
    )
  }
}


export default (CondominioPage)
