import React, {useState, useEffect} from 'react'
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Residuos Orgánicos',
    subcategory:[
      {id: 1, val: '1. Separar los residuos orgánicos en un contenedor distinto en la casa'},
      {id: 2, val: '2. Una vez separados se debe incorporar a la compostera, vermicompostera o entregarlo el día de la recolección municipal'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Papel',
    subcategory:[
      {id: 1, val: '1. Saca elementos como clips, corchetes, cinta adhesiva y espiral'},
      {id: 2, val: '2. Deposita el papel en el contenedor correspondiente'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Vidrios',
    subcategory:[
      {id: 1, val: '1. Quita etiquetas y tapas'},
      {id: 2, val: '2. Enguaja con poca agua y escurre'},
      {id: 2, val: '3. Deposita el vidrio en el contenedor correspondiente'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Botellas plásticas',
    subcategory:[
      {id: 1, val: '1. Sacar la tapa'},
      {id: 2, val: '2. Saca la etiqueta'},
      {id: 3, val: '3. Quita los restos líquidos'},
      {id: 4, val: '4. Enguaja con un poco de agua y escurre'},
      {id: 5, val: '5. Después de esto: aplasta y deposita en el contenedor correspondiente'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Latas de metal',
    subcategory:[
      {id: 1, val: '1. Quita los restos de alimentos'},
      {id: 2, val: '2. Quita la etiqueta'},
      {id: 3, val: '3. Enguaja con un poco de agua y escurre'},
      {id: 4, val: '4. Aplasta las latas de alumnio'},
      {id: 5, val: '5. Deposita en el contenedor correspondiente'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Cartón',
    subcategory:[
      {id: 1, val: '1. Quitar elementos como cintas adhesivas, corchetes metálicos, entre otros'},
      {id: 2, val: '2. Si está manchado con restos de alimentos, límpialo'},
      {id: 3, val: '3. Reduce su volumen aplanándolo'},
      {id: 4, val: '4. Deposita el cartón en el contenedor correspondiente'},
    ]
  },


];

const ExpandableComponent = ({item, onClickFunction}) =>{
  const [layoutHeight, setlayoutHeight] =useState(0);
  useEffect(()=>{
    if(item.isExpanded){
      setlayoutHeight(null);
    }else{
      setlayoutHeight(0);
    }
  }, [item.isExpanded])
  return(
    <View>
      <TouchableOpacity style={styles.item}
      onPress={onClickFunction} >
      <Text style={styles.itemText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View style={{
        height: layoutHeight,
        overflow: 'hidden',
      }}>
        {item.subcategory.map((item, key)=>(
            <TouchableOpacity 
              key={key}
              style={styles.content}>
              <Text style={styles.text}>{item.val}</Text>
              <View style={styles.separator}/>
            </TouchableOpacity>
        ))} 
      </View>
    </View>
  )
}

const HowToLista = () => {
  const [multiSelect, setmultiSelect] =useState(false);
  const [listaDataSource, setlistDataSource]=useState(CONTENT);
  const navigation = useNavigation();

  if(Platform.OS == 'android'){
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listaDataSource]
    if (multiSelect){
      array[index]['isExpanded'] = !array[index]['isExpanded']
    }else{
      array.map((value,placeindex) =>
        placeindex==index
        ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
        :  (array[placeindex]['isExpanded']) = false
        );
    }
    setlistDataSource(array)
  }
  return(
    <SafeAreaView>
      <View style={{
        //borderWidth: 1,
        borderColor: '#d6d7da',
        height:100,
        marginBottom:10,}}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop:10,
          color: '#69995D',
        }}> Green Spot </Text>
      </View>
      <View>
        <View style={styles.header}>
        <Text style={styles.titleText}> ¿CÓMO SE RECICLA? </Text>
        <TouchableOpacity onPress={()=>setmultiSelect(!multiSelect)}>
        </TouchableOpacity>
        </View>
        <ScrollView>
          {listaDataSource.map((item, key)=>(
              <ExpandableComponent
                key={item.category_name}
                item={item}
                onClickFunction={()=>{
                  updateLayout(key)
                }}/>
          ))}
        </ScrollView>
        <View>
          <Text style={{
            color: 'blue',
            fontSize: 15,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 10,
            textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate("InformationPage")}>Volver atrás </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    padding: 10,
    alignContent:'center'
  },
  titleText:{
    fontSize:22,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#69995E'
  }, 
  item:{
    backgroundColor:'#69995E',
    padding: 20
  },
  itemText:{
    fontSize:16,
    fontWeight: '500',
    color:'white',

  },
  content:{
    paddingLeft: 10,
    paddingRight:10,
    backgroundColor:'white',
  },
  text:{
    fontSize:16,
    padding:10
  },
  separator:{
    height: 0.5,
    backgroundColor:'#c8c8c8',
    width:'100%'
  }
})

export default HowToLista;