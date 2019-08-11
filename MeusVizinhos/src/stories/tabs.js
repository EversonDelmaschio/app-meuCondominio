import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import ComercioStack from './comercio/stack'
import Condominio from './condominio/page'
import Noticias from './noticias/page'
import PerfilStack from './perfil/stack'

/*
createMaterialBottomTabNavigator(
  RouteConfigs,
  MaterialBottomTabNavigatorConfig
);
*/

export default createMaterialBottomTabNavigator({
    Condominio: { 
      screen: Condominio,
      navigationOptions: {
        title: 'Condominio',
        tabBarIcon: ({ tintColor, focused }) => {
          if (focused) {
            return (
              <MaterialCommunityIcon
                name="home"
                size={22}
                style={{ color: tintColor }}
              />
            )
          } else {
            return (
              <MaterialCommunityIcon
                name="home-outline"
                size={22}
                style={{ color: tintColor }}
              />
            )
          }
        }
      }
     },
     ComercioStack: { 
      screen: ComercioStack,
      navigationOptions: {
        title: 'Comercio',
        tabBarIcon: ({ tintColor, focused }) => {
          if (focused) {
            return (
              <MaterialCommunityIcon
                name="cart"
                size={22}
                style={{ color: tintColor }}
              />
            )
          } else {
            return (
              <MaterialCommunityIcon
                name="cart-outline"
                size={22}
                style={{ color: tintColor }}
              />
            )
          }
        }
      } 
    },
    Noticias: { 
      screen: Noticias,
      navigationOptions: {
        title: 'Noticias',
        tabBarIcon: ({ tintColor, focused }) => {
          if (focused) {
            return (
              <MaterialCommunityIcon
                name="ballot"
                size={22}
                style={{ color: tintColor }}
              />
            )
          } else {
            return (
              <MaterialCommunityIcon
                name="ballot-outline"
                size={22}
                style={{ color: tintColor }}
              />
            )
          }
        }
      }
     },
     PerfilStack: { 
      screen: PerfilStack,
      navigationOptions: {
        title: 'Perfil',
        tabBarIcon: ({ tintColor, focused }) => {
          if (focused) {
            return (
              <MaterialCommunityIcon
                name="account"
                size={22}
                style={{ color: tintColor }}
              />
            )
          } else {
            return (
              <MaterialCommunityIcon
                name="account-outline"
                size={22}
                style={{ color: tintColor }}
              />
            )
          }
        }
      }
     },
  }, {
    initialRouteName: 'ComercioStack',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  });