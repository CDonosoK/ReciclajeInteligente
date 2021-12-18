import React, {useState, useEffect} from 'react'
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager} from 'react-native'

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Residuos Orgánicos',
    subcategory:[
      {id: 1, val: 'Cáscaras'},
      {id: 2, val: 'Restos de frutas y verduras'},
      {id: 3, val: 'Frutas y verduras muy maduras'},
      {id: 4, val: 'Cáscaras de huevos'},
      {id: 5, val: 'Pasto, restos de podas, hojas verdes y secas'},
      {id: 6, val: 'Restos de té, café, mate y bolsas de té'}
    ]
  },
  {
    isExpanded: false,
    category_name: 'Papel',
    subcategory:[
      {id: 1, val: 'Papel blanco de impresora'},
      {id: 2, val: 'Hojas de cuaderno'},
      {id: 3, val: 'Boletas, facturas, guías, sobres'},
      {id: 4, val: 'Libros sin tapa, diarios, revistas'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Vidrios',
    subcategory:[
      {id: 1, val: 'Botellas'},
      {id: 2, val: 'Frascos y vasos de vidrio transparente o de color'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Botellas plásticas',
    subcategory:[
      {id: 1, val: 'Botellas desechables para bebidas'},
      {id: 2, val: 'Contenedores de fruta (envase clamshell) o artículos fabricados con PET(N°1)'},
      {id: 3, val: 'Envases de detergente, champús, bidones'},
      {id: 4, val: 'Tapas de botellas y otros articulos de polipropileno(N°5)'},
      {id: 5, val: 'Bolsas fabricadas con polietileno(N°2 y 4)'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Latas de metal',
    subcategory:[
      {id: 1, val: 'Latas de bebida (de aluminio)'},
      {id: 2, val: 'Tarros de conserva (hojalata)'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Cartón',
    subcategory:[
      {id: 1, val: 'Cartón corrugado'},
      {id: 2, val: 'Cajas de embalaje'},
      {id: 3, val: 'Cartulinas, papel kraft'},
      {id: 4, val: 'Cilindros de papel absorbente e higiénico'},
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
              <Text style={styles.text}>{key}. {item.val}</Text>
              <View style={styles.separator}/>
            </TouchableOpacity>
        ))} 
      </View>
    </View>
  )
}

const Lista = () => {
  const [multiSelect, setmultiSelect] =useState(false);
  const [listaDataSource, setlistDataSource]=useState(CONTENT);

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
      <View>
        <View style={styles.header}>
        <Text style={styles.titleText}> ¿QUÉ SE PUEDE RECICLAR? </Text>
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
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    padding: 10
  },
  titleText:{
    fontSize:22,
    fontWeight: 'bold'
  }, 
  item:{
    backgroundColor:'orange',
    padding: 20
  },
  itemText:{
    fontSize:16,
    fontWeight: '500',

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

export default Lista;