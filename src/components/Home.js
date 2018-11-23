import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';



export default class Home extends Component {
  render() {
    return (
      <ImageBackground  source={require('../images/bg.jpg')} style={styles.containerHome}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#000000',
  },
});