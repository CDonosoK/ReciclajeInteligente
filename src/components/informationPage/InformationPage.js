import React from 'react';
import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native';
import ButtonUno from './ButtonUno';
import ButtonDos from './ButtonDos';
import Lista from './Lista.js';
import HowToLista from './HowToLista';
import { useNavigation } from '@react-navigation/native';



export function InformationPage()  {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{
      marginTop: 20,
      marginLeft:10,
      marginRight:10,
      }}>
      <View style={{
        //borderWidth: 1,
        borderColor: '#d6d7da',
        height:100,
        marginBottom:10,}}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop:10,
          color: '#69995D',
        }}> Green Spot </Text>
      </View>
      <Text style={styles.text}>Para que los residuos puedan reciclarse, deben estar limpios, secos y libres de material orgánico al momento de depositarse en puntos de reciclaje. </Text>
      <Text style={styles.text}>Sigue estos 3 simples pasos y ya contribuyes al reciclaje:</Text>
      <View style={{paddingTop:10,alignContent:'center', justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.textoimagen}>Limpia</Text>
        <Image style={{
          width: 70,
          height: 70,}} source={require("../assets/images/limpo-verde.png")}/>
      </View>
      <View style={{paddingTop:10, alignContent:'center', alignItems:'center'}}>      
        <Text style={styles.textoimagen}>Reduce</Text>
        <Image style={{
          width: 70,
          height: 70,}} source={require("../assets/images/reduce-verde.png")}/>
        
      </View>
      <View style={{paddingTop:10, alignContent:'center',alignItems:'center'}}>      
        <Text style={styles.textoimagen}>Separa</Text> 
        <Image style={{
          width: 70,
          height: 70,
          alignContent:'center'}} source={require("../assets/images/separa-verde.png")}/>
      </View>
      <Text style={styles.text}>Para más información en qué se puede reciclar y cómo: </Text>
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
    fontWeight: 'bold',

  },
  textoimagen:{
    color:'#69995E',
    fontSize: 18
  }
})

export default InformationPage;

