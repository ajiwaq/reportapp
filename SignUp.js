import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ImageBackground,
TextInput, Button, TouchableOpacity, Image, Alert } from "react-native";
import Loading from './Loading';
import {Actions} from 'react-native-router-flux';


export default class SignUp extends Component {

  constructor(props) {
    super(props)
     this.state = {
       userPhone: '',
       userPassword: '',
       userConPassword: '',
       isLoading:false
     }
   }

 UserLoginFunction = () =>{
   var phoneno = /^\d{11}$/;
   const {userPhone} = this.state;
	const {userPassword} = this.state;
	const {userConPassword} = this.state;
  var checkValid = userPhone.match(phoneno)

if(userPhone == "" || userPassword == "" || userConPassword == "" )
{
  alert("Can't be Empty");
}
else if (!checkValid)
{
  alert("This is not a valid phone number");
}
else if (userPassword != userConPassword){
    alert("Passwor doesn't match");
  }
else{
  this.setState({
    isLoading:true
  })
	fetch('https://broilerhub.com/mobile_calculator/user_registration.php', {
		method: 'POST',
		header:{
			'Accept':'application/json',
			'Content-Type':'application/json',
		},
		body:JSON.stringify({
			phone:userPhone,
			password:userPassword,
			con_password:userConPassword
		})
	})
	.then((response) => response.json())
		.then((responseJson) => {
      this.setState({
        isLoading:false
      })
      Alert.alert(responseJson);
      Actions.push('FirstPage');

		})
		.catch((error) => {
			console.error(error);
		});
  }
 }


  render() {
    if(this.state.isLoading == true){
    return (
      <Loading />
    )
  }
  else{
    return(
    <ImageBackground  source={require('../image/bg4.jpg')}  style={styles.container} >
      <View style={styles.container}>


      <Text style={styles.headerText}>
          Registration Page
        </Text>

        <TextInput placeholder="Phone Number" onChangeText={userPhone=>this.setState({userPhone})} placeholderTextColor="white"  style={styles.txtInput} underlineColorAndroid={'transparent'}/>
        <TextInput placeholder="Password" onChangeText={userPassword=>this.setState({userPassword})} placeholderTextColor="white" secureTextEntry={true} style={styles.txtInput} underlineColorAndroid={'transparent'}/>
        <TextInput placeholder="Confirm Password" onChangeText={userConPassword=>this.setState({userConPassword})} placeholderTextColor="white" secureTextEntry={true} style={styles.txtInput} underlineColorAndroid={'transparent'}/>


      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.UserLoginFunction.bind(this)}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>

      </View>
    </ImageBackground>
    );
  }
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
   height: null,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#f8c31b",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  loginText: {
    color: 'white',
    fontWeight:'bold'
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  },
  headerText: {
   fontSize: 22,
   textAlign: "center",
   margin: 10,
   color: "white",
   fontWeight: "bold",
   marginBottom:100,
 },
 txtInput:{
   marginBottom:25,
   borderBottomWidth:1,
   borderBottomColor:'#f9f9f9',
   alignSelf:'stretch',
   height:40,
   color:'#fff'
 },
});
