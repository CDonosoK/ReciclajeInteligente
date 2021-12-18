import * as React from 'react'

import Login from './src/components/LogIn/Login';
import Signup from './src/components/LogIn/Signup';
import Password from './src/components/LogIn/Password';
import Confirmation from './src/components/LogIn/Confirmation';

import ContainerInfoMC from './src/components/containerInfo/containerInfoMC'
import ContainerInfoNN from './src/components/containerInfo/containerInfoNN'
import ContainerInfoPV from './src/components/containerInfo/containerInfoPV'

import Lista from './src/components/lista/Lista';
import HowToLista from './src/components/lista/HowToLista';
import  ButtonUno from './src/components/informationPage/ButtonUno';
import  ButtonDos from './src/components/informationPage/ButtonDos';
import InformationPage from './src/components/informationPage/InformationPage';

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

        <Stack.Screen name="InformationPage" component={InformationPage}/>
        <Stack.Screen name="ButtonUno" component={ButtonUno}/>
        <Stack.Screen name="ButtonDos" component={ButtonDos}/>
        <Stack.Screen name="Lista" component={Lista}/>
        <Stack.Screen name="HowToLista" component={HowToLista}/>

      </Stack.Navigator>
    </NavigationContainer>
      
  )
}