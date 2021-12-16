import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {images} from '../../assets';

const propTypes = {
  item: PropTypes.object
};

class ListaItem extends Component{
  state = {
    isSelected: true
  };
  onPress = ()=>{
    this.setState((prevState, prevProps)=>({
      isSelected: !prevState.isSelected
    }));
    
  }

  renderDetails = ()=>(
    <View>
      <Text style = {styles.description}>{this.props.item.description}</Text>
      <Text style = {styles.description}>{this.props.item.description2}</Text>
    </View>
  )

  render(){
    const {isSelected} =this.state;
    return(
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.item.title}</Text>
            <Image source={images.expand} style={styles.image}/>
          </View>

        </TouchableWithoutFeedback>
        {isSelected && this.renderDetails()}
      </View>
    )
  }
}

ListaItem.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    margin:10
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  title:{
    flex:1,
    fontSize:22,
    color:'green',
  },
  description:{
    flex:1,
    fontsize: 22,
    color: 'black',
    paddingTop:10
  },
  image:{
    width:20,
    height:20, 
    color: 'green'
  }
});

export {ListaItem};