import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';



export default class Splash extends Component {
  render() {
    return (
      <ImageBackground  source={require('../images/bg.jpg')} style={styles.containerSplash}>
      	<View style={styles.logo}>      		
      		<Image	          
	          source={require('../images/logo_splash.png')}
	        />        	
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    backgroundColor: '#000000',
  },
  logo:{
  	alignItems: 'center',
  	flexGrow: 1,
  	justifyContent: 'center'
  },
});