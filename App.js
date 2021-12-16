import * as React from 'react'
import { 
  View, 
  Button,
} from 'react-native'

import ContainerInfoMC from './src/components/containerInfo/containerInfoMC'
import ContainerInfoNN from './src/components/containerInfo/containerInfoNN'
import ContainerInfoPV from './src/components/containerInfo/containerInfoPV'


import LoadingMap from './src/components/mapView/loadingMap'
import MapScreen from './src/components/mapView/mapScreen'

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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Página Principal" component={HomeScreen} />

        <Stack.Screen name="MapScreen" component={MapScreen} />

        <Stack.Screen name="ContainerInfoMC" component={ContainerInfoMC} />
        <Stack.Screen name="ContainerInfoNN" component={ContainerInfoNN} />
        <Stack.Screen name="ContainerInfoPV" component={ContainerInfoPV} />


        <Stack.Screen name="LoadingMap" component={LoadingMap} />
      </Stack.Navigator>
    </NavigationContainer>
      
  )
}