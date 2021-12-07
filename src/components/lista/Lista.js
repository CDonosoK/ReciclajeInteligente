import React, {Component} from 'react';
import {View, FlatList,Text, StyleSheet} from 'react-native';

import {ListaItem} from './ListaItem';

const data = [
  {title: 'Residuos orgánicos', 
  description:'¿QUÉ SE PUEDE RECICLAR?', 
  description2:
    'Se reciclan cáscaras y restos de frutas, restos de verduras y hojas marchitas de vegetales, frutas y verduras muy maduras, cáscaras de huevos, pasto, restos de podas, hojas verdes y secas, tierra de jardín, restos de té, café y mate y bolsas de té.'},
  
  {title: 'Botellas plásticas', 
  description:'¿QUÉ SE PUEDE RECICLAR?', 
  description2:
    'Se reciclan botellas desechables para bebidas, contenedores de fruta (envases clamshell) u otros artículos fabricadas con PET (Nº1). También se reciclan envases de detergente, champús, bidones, envases de leche fabricados de polietileno de alta densidad (Nº2), tapas de botellas y otros artículos fabricados con polipropileno (Nº5) y bolsas fabricadas con polietileno (Nº2 y Nº4).'},
  {title: 'Vidrios',
  description: '¿QUÉ SE PUEDE RECICLAR',
  description2:'Se reciclan Botellas, frascos y vasos de vidrio transparente o de color (ampliar indicando bondades del reciclaje de vidrio).' },
  {title: 'Papel',
    description: '¿QUÉ SE PUEDE RECICLAR',
    description2:'Se reciclan papel blanco de impresora, hojas de cuaderno, boletas, facturas, guías, sobres, libros sin tapa, diarios y revistas, sin importar si está impreso o escrito, pero sin manchas. '},
  {title: 'Latas',
    description: '¿QUÉ SE PUEDE RECICLAR',
    description2:'Se reciclan principalmente latas de bebidas fabricadas de aluminio y tarros de conservas que son fabricados con hojalata.' },
  {title: 'Cartón', 
  description:'¿QUÉ SE PUEDE RECICLAR?', 
  description2:'Se recicla el Cartón corrugado, cajas de embalaje, cartulinas, papel kraft, cilindros de papel absorbente e higiénico, entre otros.'}
  ]

export default class Lista extends Component {
  renderItem = ({item}) => <ListaItem item={item}/>
  render(){
    return(
      <View style={styles.container}>
        <FlatList data={data} renderItem={this.renderItem} 
        keyExtractor={(index, _)=> index + ''}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop:50
  }
});