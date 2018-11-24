import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';



export default class LogoTitle extends Component {
  render() {
    return (
          <Image	          
	          source={require('../images/logo_top.png')}
	        />        	
        
    );
  }
}

const styles = StyleSheet.create({
  
  logo:{
  	alignItems: 'center',
  	flexGrow: 1,
  	justifyContent: 'center'
  },
});