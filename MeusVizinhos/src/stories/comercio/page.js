import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'



class ComercioPage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.rowCard}>
              <View style={styles.avatar}>
                <Image
                  style={styles.image}
                  source={require('../comercio/assets/pessoa1.jpg')}
                  resizeMode="cover"
                  borderRadius={25}
                  />
                </View>
              <Text>502D - Everson Delmaschio</Text>
            </View>
            <View style={styles.textCard}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl dolor, dictum mattis sapien ultrices eu. Praesent id quam vel felis feugiat tincidunt. Sed hendrerit quam nec auctor viverra. Duis ac dignissim purus. Vivamus auctor scelerisque fermentum. Fusce sagittis eleifend iaculis. Aenean tempus risus eget libero lacinia, non iaculis dolor scelerisque.
              </Text>
            </View>
            <View style={styles.bottomCard}>
              <AntDesign 
              name='shake'
              size={20}
              style={{marginRight:10}}/>
              <AntDesign
              name='message1'
              size={20}/>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.rowCard}>
              <View style={styles.avatar}>
                <Image
                  style={styles.image}
                  source={require('../comercio/assets/pessoa2.jpg')}
                  resizeMode="cover"
                  borderRadius={25}
                  />
                </View>
              <Text>306D - Camila Rodrigues</Text>
            </View>
            <View style={styles.textCard}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl dolor, dictum mattis sapien ultrices eu. 
                Praesent id quam vel felis feugiat tincidunt. Sed hendrerit quam nec auctor viverra. Duis ac dignissim purus.
              </Text>
              <View style={{alignItems:'center'}}>
                  <Image
                  style = {{width:380, height: 250, marginTop:10, marginBottom:10}}
                  source={require('../comercio/assets/cardapio1.jpeg')}
                  resizeMode="contain"
                  />
                </View>
            </View>
            <View style={styles.bottomCard}>
              <AntDesign 
              name='shake'
              size={20}
              style={{marginRight:10}}/>
              <AntDesign
              name='message1'
              size={20}/>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.rowCard}>
              <View style={styles.avatar}>
                <Image
                  style={styles.image}
                  source={require('../comercio/assets/pessoa3.jpg')}
                  resizeMode="cover"
                  borderRadius={25}
                  />
                </View>
              <Text>102A - Josimar Pereira</Text>
            </View>
            <View style={styles.textCard}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl dolor, dictum mattis sapien ultrices eu. Praesent id quam vel felis feugiat tincidunt. Sed hendrerit quam nec auctor viverra. Duis ac dignissim purus. Vivamus auctor scelerisque fermentum. Fusce sagittis eleifend iaculis. Aenean tempus risus eget libero lacinia, non iaculis dolor scelerisque.
              </Text>
            </View>
            <View style={styles.bottomCard}>
              <AntDesign 
              name='shake'
              size={20}
              style={{marginRight:10}}/>
              <AntDesign
              name='message1'
              size={20}/>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{ 
  backgroundColor: '#c7c7c7', 
  flex: 1, 
},
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  card: { 
    marginTop:15,
    backgroundColor: '#fff',
    paddingHorizontal:15,  
    paddingVertical:20
  },
  avatar: {
    height:  50,
    width:  50,
    marginRight:10
  },
  image: {
    width: null,
    height: null,
    flex: 1
  },
  textCard: {
    marginTop: 20
  },
  bottomCard:{
    marginTop: 10,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'flex-start'
  }
})



export default (ComercioPage)
