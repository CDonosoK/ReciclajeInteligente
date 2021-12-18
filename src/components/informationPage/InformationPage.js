import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ButtonUno from './ButtonUno';
import ButtonDos from './ButtonDos';
import Lista from '../lista/Lista.js';
import HowToLista from '../lista/HowToLista.js';
import { useNavigation } from '@react-navigation/native';



export function InformationPage()  {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{
        borderColor:'#d6d7da',
        height:100,
        marginBottom:10,
      }}>
        <View style={{
        //borderWidth: 1,
        borderColor: '#d6d7da',
        height:100,
        marginBottom:10,
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop:0
        }}> RECICLAJE INTELIGENTE </Text>
      </View>
      <Text style={styles.text}>Para que los residuos puedan reciclarse, deben estar limpios, secos y libres de material orgánico al momento de depositarse en puntos de reciclaje</Text>
      <ButtonUno onPress ={()=> navigation.navigate("Lista")}></ButtonUno>
      <ButtonDos onPress ={()=> navigation.navigate("HowToLista")}></ButtonDos>
      </View>
    </SafeAreaView>
  );
}
const styles =StyleSheet.create({
  safe:{
    backgroundColor:'#ccc'
  },
  text:{
    textAlign:'justify',
    color:'#69995E',
    fontSize: 16,
  }
})

export default InformationPage;
