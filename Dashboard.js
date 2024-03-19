import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ImageBackground,
TextInput, Button, TouchableOpacity, Image, Alert } from "react-native";


import {Actions} from 'react-native-router-flux';

export default class Dashboard extends Component {
  render() {
    return (
    <ImageBackground  source={require('../image/bg4.jpg')}  style={styles.container} >
      <View style={styles.container}>

      <Text style={styles.headerText}>
          Welcome Admin
        </Text>


      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.push('Login')}>
        <Text style={styles.loginText}>Log-Out</Text>
      </TouchableOpacity>

      </View>
    </ImageBackground>
    );
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
    width:100,
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
