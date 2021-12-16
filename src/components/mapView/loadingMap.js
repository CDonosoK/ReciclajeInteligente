import React from 'react'
import { 
  Text, 
  View,
 } from 'react-native'

import {ProgressBar} from '@react-native-community/progress-bar-android';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './mapScreen';

export default function LoadingMap({navigation}) {
  setTimeout(
    () => { navigation.navigate(MapScreen) },
    2000
  )
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center', 
      marginLeft: 30,
      marginRight: 30,
    }}>
      <View>
        <Text style={{
          color: '#001B5B',
          fontSize: 42,
          fontWeight: '100',
          textAlign: 'center',
        }}>
          Cargando
          Mapas
        </Text>   
      </View>
      <View>
        <ProgressBar 
        styleAttr="Horizontal"
        color='#001B5B'
        />
      </View>
      
         
    </View>
  )
}
