import React from 'react'
import { 
  Text, 
  View,
 } from 'react-native'

 import {ProgressBar} from '@react-native-community/progress-bar-android';


export default function LoadingMap() {
  return (
    <View>
      <View>
        <Text style={{
          color: '#001B5B',
          fontSize: 42,
          fontWeight: '100',
          textAlign: 'center',
        }}>
          Bienvenido a Mapas 
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
