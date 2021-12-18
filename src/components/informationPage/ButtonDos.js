import React,{useState, useEffect} from 'react'
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Lista from '../lista/Lista.js'

export function ButtonDos(props){
  const navigation = useNavigation();
  const {onPress} =props
  return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>¿CÓMO SE RECICLA?</Text>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default ButtonDos;