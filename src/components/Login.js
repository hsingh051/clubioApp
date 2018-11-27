import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Alert, ActivityIndicator, AsyncStorage
} from 'react-native';

export default class Login extends Component {

	state = {
	    email: '',
	    isLoading: false,
	  }

	handlePress = async () => {
		this.setState({isLoading:true});

		if(this.state.email == ''){
	       Alert.alert("Please enter mobile number");
	    }else{
	   		fetch('http://dev.01s.in/farm2energytest/public/index.php/api/login', {
		        method: 'POST',
		        headers: {
		          Accept: 'application/json',
		          'Content-Type': 'application/json',
		        },
		        body: JSON.stringify({
		          email: this.state.email,
		        }),
		    }).then((response) => response.json())
		      .then((responseJson) => {
		      		this.setState({isLoading:false});		      		
			        if(responseJson.status_code == 204){
			            Alert.alert(responseJson.result);
			        }
			        else{
			        	console.error(responseJson);
			            Alert.alert("Thanks for Login");
			            AsyncStorage.setItem('email', this.state.email);
			            //Actions.mapview();
			        }
			        return responseJson;
		        })
		        .catch((error) => {
		          console.error(error);
		        });
	    } 
	  	
	}


    render() {
	    if(this.state.isLoading){
	      return(	        
	          <ActivityIndicator size="large"  color="black" style={{ position:'absolute', left:0, right:0, bottom:0, top:0 }}/> 
	        
	      )
	    }

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} 
                            onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>                                
                                <Text style={styles.title}>LOGO HERE</Text>
                                
                                <TextInput style={styles.input}
                                    placeholder="Enter email address"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    //returnKeyType='go'
                                    autoCorrect={false}
                                    onChangeText={email => this.setState({email})}
                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input} 
                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                /> 
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.handlePress.bind(this)}>
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C48E0E',
        
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 5,
        opacity: 0.9,
    },
    infoContainer: {
    	flex: 1,
    	alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        // height: 200,
        //padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
         fontSize: 18,
        minWidth: 300,
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: 'green',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color :'#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        minWidth: 300
    },
    loading: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    alignItems: 'center',
	    justifyContent: 'center'
	}
})