import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Password from './screens/Password';
import Confirmation from './screens/Confirmation';
import Maps from './screens/Maps';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}
