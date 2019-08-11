import React from 'react'

import {
  View,
  Text
} from 'react-native'


class NoticiasPage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>Noticias</Text>
      </View>
    )
  }
}


export default (NoticiasPage)
