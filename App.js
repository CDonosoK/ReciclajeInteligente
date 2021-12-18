import * as React from 'react'

import Login from './src/components/LogIn/Login';
import Signup from './src/components/LogIn/Signup';
import Password from './src/components/LogIn/Password';
import Confirmation from './src/components/LogIn/Confirmation';

import ContainerInfoMC from './src/components/containerInfo/containerInfoMC'
import ContainerInfoNN from './src/components/containerInfo/containerInfoNN'
import ContainerInfoPV from './src/components/containerInfo/containerInfoPV'


import LoadingMap from './src/components/mapView/loadingMap'
import MapScreen from './src/components/mapView/mapScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen name="MapScreen" component={MapScreen} />

        <Stack.Screen name="ContainerInfoMC" component={ContainerInfoMC} />
        <Stack.Screen name="ContainerInfoNN" component={ContainerInfoNN} />
        <Stack.Screen name="ContainerInfoPV" component={ContainerInfoPV} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Confirmation" component={Confirmation} />

        <Stack.Screen name="LoadingMap" component={LoadingMap} />

      </Stack.Navigator>
    </NavigationContainer>
      
  )
}