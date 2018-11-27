import React, {Component} from 'react';
import {Platform, ActivityIndicator, StyleSheet, Text, View, Image, Button, ImageBackground, StatusBar,ScrollView} from 'react-native';
import LogoTitle from './LogoTitle';
import ArtistItem from './ArtistItem';
import Carousel from 'react-native-carousel';
import Spinner from 'react-native-loading-spinner-overlay';



export default class Home extends Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

   componentDidMount(){
    return fetch('http://clu3io.com/php/mobileApi.php', {  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api: 'getArtists',
            secondParam: 'yourOtherValue',
          })
        })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
            //console.error(responseJson);
        });

      })
      .catch((error) =>{
        this.setState({isLoading: false});
        console.error(error);
      });
  }

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
    headerTransparent: true,
    headerBackTitle: null,
  };

  render() {

    if(this.state.isLoading){
      return(
        <ImageBackground  source={require('../images/bg.jpg')} style={styles.containerHome}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Spinner
                visible = {true}
                textContent={'Loading...'}
                textStyle={{color: '#FFF'}}
              />
          </View>
        </ImageBackground>
      )
    }

    return (
      
      <ImageBackground  source={require('../images/bg.jpg')} style={styles.containerHome}>
        <ScrollView>
        
        <StatusBar  barStyle="light-content" />
        <View style={styles.mainHome}>
          <Text style={styles.topText}>FIND AND BOOK YOUR DJ</Text>
          <Text style={styles.topHeading}>DJs in Maribor</Text>
          <View style={styles.midLine} />
          
          <View style={styles.carouselHome}>
            <Carousel animate={false} width={375} hideIndicators={true}>
              <View style={styles.carouselItem}>
                <ArtistItem name='Artist One' genre='Pop' price='50-200 EUR' imageUrl='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png'  />
              </View>
              <View style={styles.carouselItem}>
                <ArtistItem name='Artist Two' genre='Pop' price='90-200 EUR' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6x6tN6Io9c4GrwqBCUcPchKQODOujjQVX0le_8dbdM5TJRMz' />
              </View>
              <View style={styles.carouselItem}>
                <ArtistItem name='Artist Third' genre='Pop' price='50-200 EUR' imageUrl='https://static.thenounproject.com/png/17241-200.png' />
              </View>
            </Carousel>
          </View>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
        
        </ScrollView>
        </ImageBackground>
       
    );
  }
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#000000',
  },
  mainHome: {
    flex: 1,
    marginTop:110,
    height: 'auto',

  },
  topText: {
    color:'#ccc',
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  topHeading: {
    color:'#fff',
    fontSize: 38,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  midLine: {
    color:'#fff',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  carouselHome: {
    height: 250, 
    marginTop: 20,
    marginLeft: 20, 

  },
  carouselItem: {
    width: 185,
    backgroundColor: 'transparent',
  },
});