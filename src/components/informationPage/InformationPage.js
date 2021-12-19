import React from 'react';
import { SafeAreaView, StyleSheet, Text, View , Pressable, Image} from 'react-native';
import ButtonUno from './ButtonUno';
import ButtonDos from './ButtonDos';
import { useNavigation } from '@react-navigation/native';



export function InformationPage()  {
  const navigation = useNavigation();
  return (
    <>
    <SafeAreaView >
      <View style={{
      marginTop: 20,
      marginLeft:10,
      marginRight:10,
      }}>
      <Pressable 
      onPress={() => navigation.navigate('MapScreen')}
      >
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
          marginTop:10,
          fontWeight:'bold',
          color: '#69995D',
        }}> Green Spot </Text>
      </View>
      </Pressable>
      <Text style={styles.text}>Para que los residuos puedan reciclarse, deben estar limpios, secos y libres de material orgánico al momento de depositarse en puntos de reciclaje. </Text>
      <Text style={styles.text}>Sigue estos 3 simples pasos y ya contribuyes al reciclaje:</Text>
      <View style={{
        flexDirection: 'row',
        marginTop:30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
      <View style={{
        paddingTop:10,
        alignContent:'center', 
        justifyContent:'center', 
        alignItems:'center',
        marginRight:30,
        }}>
        <Text style={styles.textoimagen}>Limpia</Text>
        <Image style={{
          width: 100,
          height: 100,}} source={require("../../assets/images/limpo-verde.png")}/>
      </View>
      <View style={{
        paddingTop:10, alignContent:'center', alignItems:'center'}}>      
        <Text style={styles.textoimagen}>Reduce</Text>
        <Image style={{
          width: 100,
          height: 100,}} source={require("../../assets/images/reduce-verde.png")}/>
        
      </View>
      <View style={{
        paddingTop:10, 
        alignContent:'center',
        alignItems:'center',
        marginLeft: 30
        }}>      
        <Text style={styles.textoimagen}>Separa</Text> 
        <Image style={{
          width: 100,
          height: 100,
          alignContent:'center'}} source={require("../../assets/images/separa-verde.png")}/>
      </View>
      </View>
      
      <Text style={styles.text}>Para más información en qué se puede reciclar y cómo: </Text>
      <ButtonUno onPress ={()=> navigation.navigate("Lista")}></ButtonUno>
      <ButtonDos onPress ={()=> navigation.navigate("HowToLista")}></ButtonDos>
      </View>
      
    </SafeAreaView>
    <View style={{
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',

      }}>
        <Pressable
        onPress={
          () => navigation.navigate("MapScreen")
        }>
          <Image style={{
            width: 70,
            height: 70,
          }}
          source={require("../../assets/icons/mapScreen_NO.png")}>
          </Image>
        </Pressable>

        <Pressable
        onPress={
          () => navigation.navigate("InformationPage")
        }>
          <Image style={{
            width: 70,
            height: 70,
            marginLeft: 30,
          }}
          source={require("../../assets/icons/infoScreen_SI.png")}>
          </Image>
        </Pressable>
        
        <Pressable
        onPress={
          () => navigation.navigate("Login")
        }>
          <Image style={{
            width: 70,
            height: 70,
            marginLeft: 30,
          }}
          source={require("../../assets/icons/exitScreen_NO.png")}>
          </Image>
        </Pressable>

      </View>
      
    </>
  );
}
const styles =StyleSheet.create({
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

