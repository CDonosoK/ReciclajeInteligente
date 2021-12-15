import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ContainerInfo from './src/components/containerInfo/containerInfoMC'
import LoadingMap from './src/components/mapView/loadingMap'

export default function App() {
  return (
    <View style={styles.container}>
     <LoadingMap/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
})