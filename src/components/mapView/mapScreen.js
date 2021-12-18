import React, {useState, useEffect} from 'react'
import { 
  Text, 
  View,
  TextInput,
  ImageBackground,
  Image,
  Pressable
 } from 'react-native' 

import ContainerInfoMC from '../containerInfo/containerInfoMC';
import ContainerInfoNN from '../containerInfo/containerInfoNN';
import ContainerInfoPV from '../containerInfo/containerInfoPV';

export default function MapScreen ({navigation}) {
  return (
    <View style={{
      marginTop: 20,
      marginLeft:10,
      marginRight:10,
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
      <View style={{
        alignContent: 'center',
        alignItems: 'center',
      }}>
        <TextInput style={{
          backgroundColor: 'white',
          borderRadius: 5,
          borderWidth: 3,
          width: 300,
          height: 40,
        }}
        placeholder="🔍Buscar contenedor"
        placeholderTextColor="gray"
        borderColor="gray"
        />
      </View>
      <View style={{
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#d6d7da',
        alignContent: 'center',
        marginRight: 10,
        marginLeft: 10,

      }}>
      <ImageBackground style={{
          width: 346,
          height: 400,
        }}
        source={require("../../assets/images/Map.png")}>
        <Pressable style={{
          flexDirection: 'row',
          marginTop: 50,
          marginLeft: 160,
        }}
        onPress={() => navigation.navigate("ContainerInfoPV")}
        >
          <Image style={{
            width: 15,
            height: 15,
          }}
          source={require("../../assets/icons/positionContainer.png")}>
          </Image>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#001B5B',
          }}>
            Contenedor Providencia
          </Text>
        </Pressable>

        <Pressable style={{
          flexDirection: 'row',
          marginTop: 75,
          marginLeft: 60,
        }}
        onPress={() => navigation.navigate("ContainerInfoNN")}
        >
          <Image style={{
            width: 15,
            height: 15,
          }}
          source={require("../../assets/icons/positionContainer.png")}>
          </Image>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#001B5B',
          }}>
            Contenedor Ñuñoa
          </Text>
        </Pressable>
        <Pressable style={{
          flexDirection: 'row',
          marginTop: 90,
          marginLeft: 150,
        }}
        onPress={() => navigation.navigate("ContainerInfoMC")}
        >
          <Image style={{
            width: 15,
            height: 15,
          }}
          source={require("../../assets/icons/positionContainer.png")}>
          </Image>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#001B5B',
          }}>
            Contenedor Macul
          </Text>

        </Pressable>

          

        </ImageBackground>
      </View>
      <View style={{
        marginTop: 20,
        flexDirection: 'row',

      }}>
        <Pressable
        onPress={
          () => navigation.navigate("ContainerInfoPV")
        }>
          <Image style={{
            width: 80,
            height: 80,
            marginLeft: 30,
          }}
          source={require("../../assets/icons/mapScreen_SI.png")}>
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
  )
}
