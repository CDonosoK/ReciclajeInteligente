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
      
      <View >
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View >
            <Text >{this.props.item.title}</Text>
            <Image source={images.expand} />
          </View>

        </TouchableWithoutFeedback>
        {isSelected && this.renderDetails()}
      </View>
    )
  }
}

ListaItem.propTypes = propTypes;


export {ListaItem};