import React from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  Alert
} from 'react-native';

export default function ContainerInfoMC({navigation}) {
  return (
    <View style={{
      marginTop: 20,
      marginLeft:10,
      marginRight:10,
    }} >
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
              onPress={() => navigation.navigate("MapScreen")}>
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
        marginLeft: 310,
      }}>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#001B5B',
        }}>
          80%
        </Text>
      </View>
      <View style={{
        borderWidth:5,
        borderColor: '#d6d7da',
        backgroundColor: '#d6d7da',
        borderRadius:5,
        marginBottom:10,
      }}>
        <View style={{
        borderWidth:5,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius:5,
        marginRight:90,
      }}>

        </View>
      </View>

      <View style={{
        flexDirection: 'row',
      }}>
        <Image style={{
          width: 20,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
          source={require("../../assets/icons/positionMap.png")}/>

        <Text style={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#001B5B',
          fontSize: 15,
          fontWeight: 'bold',
          }}>
          Av. Macul 4400
        </Text>

      </View>

      <View style={{
        flexDirection: 'row',
      }}>
        <Image style={{
          width: 20,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
          source={require("../../assets/icons/checkMark.png")}/>

        <Text style={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#00A25B',
          fontSize: 15,
          fontWeight: 'bold',
          }}>
          Cartón, Papel y Vidrio
        </Text>

      </View>

      <View style={{
        flexDirection: 'row',
      }}>
        <Image style={{
          width: 20,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
          source={require("../../assets/icons/crossMark.png")}/>

        <Text style={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#E40000',
          fontSize: 15,
          fontWeight: 'bold',
          }}>
          Plástico y Latas
        </Text>

      </View>

      <View style={{
        flexDirection: 'row',
      }}>
        <Image style={{
          width: 20,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }}
          source={require("../../assets/icons/warningMark.png")}
        />
        <Pressable style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 5,
          marginLeft: 3,
          borderRadius: 5,
          borderWidth: 3,
          borderColor: '#FFC300',
        }}
        onPress={
          () => Alert.alert(
            "Denuncia realizada",
            "Tu denuncia ha sido enviada con éxito",
            [
              {text: "Aceptar"}, 
            ],
          )
        }>
          <Text style={{
            color: '#FFC300',
            fontSize: 15,
          }}>
            Denunciar
          </Text>
          
        </Pressable>  
      </View>
      <View style={{
        marginTop: 20,
        flexDirection: 'row',

      }}>
        <Pressable
        onPress={
          () => navigation.navigate("MapScreen")
        }>
          <Image style={{
            width: 80,
            height: 80,
            marginLeft: 30,
          }}
          source={require("../../assets/icons/mapScreen_NO.png")}>
          </Image>
        </Pressable>

        <Pressable
        onPress={
          () => navigation.navigate("ContainerInfoPV")
        }>
          <Image style={{
            width: 80,
            height: 80,
            marginLeft: 30,
          }}
          source={require("../../assets/icons/infoScreen_NO.png")}>
          </Image>
        </Pressable>
        
        <Pressable
        onPress={
          () => navigation.navigate("ContainerInfoPV")
        }>
          <Image style={{
            width: 80,
            height: 80,
            marginLeft: 30,
          }}
          source={require("../../assets/icons/exitScreen_NO.png")}>
          </Image>
        </Pressable>

      </View>

    </View>
   
  );
}