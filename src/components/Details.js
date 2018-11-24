import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import LogoTitle from './LogoTitle';


export default class Details extends Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
    gesturesEnabled: false,
  };


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}