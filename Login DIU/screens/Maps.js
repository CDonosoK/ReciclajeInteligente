import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';


function Confirmation() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
      <View style={{paddingTop:55}}>
        <Icon
          as={<FontAwesome5 name="user-circle" />}
          size='65'
          m={2}
          _light={{
            color: "#69995D",
          }}
          _dark={{
            color: "gray.300",
          }}
        />
      </View>
        <Text style={styles.LoginText}>Reciclaje Inteligente</Text>
      </View>
      <View style={styles.text2}>
        <Text> *Válido por una app*</Text>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} onPress={() => navigation.navigate("Login")} >
            Back to Login
        </Button>
      </View>

      
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Confirmation />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:10,
    fontSize:30,
    fontWeight:'bold',
    color: '#69995D'
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:15,
    marginLeft:15,
    marginRight:15,
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15,
  },
  buttonDesign:{
    backgroundColor:'#69995D'
  },
});
