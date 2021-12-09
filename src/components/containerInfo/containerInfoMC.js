import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking ,
} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{
        marginTop: -150,
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
      <View style={{
        marginTop: -0,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#d6d7da',
        }}>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          marginBottom: 10,
          alignSelf: 'center',
          }}>
          MACUL
        </Text>
      </View>
      <View>
        <Text style={{
          color: 'blue',
          fontSize: 15,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          textDecorationLine: 'underline'
        }}
              onPress={() => Linking.openURL('http://github.com/CDonosoK')}>
          Volver atrás
        </Text>
      </View>
      <View style={{
        borderWidth:2,
        borderColor:'#d6d7da',
        borderRadius:5,
        marginTop:10,
      }}>
        <Image style={{
          width: 350,
          height: 200,
        }}
          source={require("../../assets/images/MapMacul.png")}/>
      </View>
      <View style={{
        marginTop: 10,
        marginBottom: 10,
      }}>

      </View>
      <View style={{}}>
        <Text style={{}}>
          LINEA DE CARGA
        </Text>
      </View>

      <View style={{}}>
        <Text style={{}}>
          DIRECCIÓN
        </Text>
      </View>

      <View style={{}}>
        <Text style={{}}>
          QUE SE RECICLA
        </Text>
      </View>

      <View style={{}}>
        <Text style={{}}>
          QUE NO SE RECICLA
        </Text>
      </View>

      <View style={{}}>
        <Text style={{}}>
          BOTON DE DENUNCIA
        </Text>
      </View>

    </View>
   
  );
}