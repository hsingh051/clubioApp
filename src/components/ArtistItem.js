import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';



export default class ArtistItem extends Component {
  render() {

    const {
      imageUrl, name, genre, price
    } = this.props;

    return (
            <View>
              <Image style={{width: 150, height: 150}}source={{uri: imageUrl}} />        	
              <Text style={styles.artistName}> {name} </Text> 
              <Text style={styles.artistGenre}> {genre} </Text> 
              <View style={styles.artistPrice}> 
                 <Text style={styles.artistPriceT}>
                    {price}
                 </Text>
              </View>
            </View>
          ); 
  }
}

const styles = StyleSheet.create({
  artistName: {
    fontSize: 16,
    color: '#E3E3E3',
    marginTop: 5,

  },
  artistGenre: {
    fontSize: 16,
    color: '#5B5B5B',
    marginTop: 5,

  },
  artistPrice: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    backgroundColor: 'red',
    padding:5,
    alignSelf: 'flex-start',
    borderRadius: 5

  },
  artistPriceT: {
    fontSize: 16,
    color: 'white',
  },
  
});

ArtistItem.defaultProps = {
  imageUrl: null,
  name: null,
  genre: null,
  price: null,
};

ArtistItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  price: PropTypes.string,
};