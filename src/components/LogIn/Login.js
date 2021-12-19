import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon} from 'native-base';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function Login() {
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
        <Text style={styles.LoginText}>Green Spot</Text>
      </View>
      <View style={styles.text2}>
        <Text>Todavía no tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.buttonText}> Regístrate</Text></TouchableOpacity>
      </View>

      {/* Username Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput} >
          <Input
            InputLeftElement={
              <Icon 
                as={<FontAwesome name="user" />}
                size="sm"
                m={2}
                _light={{
                  color: "#69995D",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Nombre de Usuario"
            _light={{
              placeholderTextColor: "#69995D",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "#69995D",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Contraseña"
            _light={{
              placeholderTextColor: "#69995D",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>
      <View style={styles.text2}>
        <TouchableOpacity onPress={() => navigation.navigate("Password")} ><Text style={styles.buttonText}> Olvidaste tu contraseña?</Text></TouchableOpacity>
      </View>
      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} onPress={() => navigation.navigate("LoadingMap")} >
            INGRESAR
        </Button>
      </View>

      
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Login />
      
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
    paddingTop:5
  },
  buttonText:{
    fontWeight:'bold',
    color: '#69995D'
  },
  emailInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15,
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#69995D'
  },
});
