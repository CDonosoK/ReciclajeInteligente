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
              onPress={() => Linking.openURL('http://google.com')}>
          Volver atrás
        </Text>
      </View>
      <View>
        <Image style={{
          width: 350,
          height: 200,
          marginTop: 10,
        }}
          source={require("../../assets/images/MapMacul.png")}/>
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