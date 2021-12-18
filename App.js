import * as React from 'react'
import { 
  View, 
  Button,
  StyleSheet
} from 'react-native'

import ContainerInfoMC from './src/components/containerInfo/containerInfoMC'
import ContainerInfoNN from './src/components/containerInfo/containerInfoNN'
import ContainerInfoPV from './src/components/containerInfo/containerInfoPV'


import LoadingMap from './src/components/mapView/loadingMap'
import MapScreen from './src/components/mapView/mapScreen'

import Lista from './src/components/lista/Lista';
import HowToLista from './src/components/lista/HowToLista';
import  ButtonUno from './src/components/informationPage/ButtonUno';
import  ButtonDos from './src/components/informationPage/ButtonDos';
import InformationPage from './src/components/informationPage/InformationPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View>
      <Button
          title="IR A MAPAS"
          onPress={() => navigation.navigate(LoadingMap)
        }
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Página Principal" component={HomeScreen} />

        <Stack.Screen name="MapScreen" component={MapScreen} />

        <Stack.Screen name="ContainerInfoMC" component={ContainerInfoMC} />
        <Stack.Screen name="ContainerInfoNN" component={ContainerInfoNN} />
        <Stack.Screen name="ContainerInfoPV" component={ContainerInfoPV} />


        <Stack.Screen name="LoadingMap" component={LoadingMap} />

        <Stack.Screen name="InformationPage" component={InformationPage}/>
        <Stack.Screen name="ButtonUno" component={ButtonUno}/>
        <Stack.Screen name="ButtonUno" component={ButtonDos}/>
        <Stack.Screen name="Lista" component={Lista}/>
        <Stack.Screen name="HowToLista" component={HowToLista}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
