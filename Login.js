import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ImageBackground,
TextInput, Button, TouchableOpacity, Image, Alert } from "react-native";
import Loading from './Loading';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
  constructor(props) {
     super(props)
      this.state = {
        UserPhone: '',
        UserPassword: '',
        isLoading:false
      }
    }

  UserLoginFunction =()=>{


 const { UserPhone }  = this.state ;
 const { UserPassword }  = this.state ;

 if(UserPhone == "" || UserPassword == "")
 {
   alert("Can't be Empty");
 }
 else
 {
    // Actions.push('LandingPage', { Email: UserPhone });

    this.setState({
      isLoading:true
    })
   fetch('https://broilerhub.com/mobile_calculator/loginprocess.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       phone: UserPhone,
       password: UserPassword

     })

   }).then((response) => response.json())
         .then((responseJson) => {

           // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
           {
             this.setState({
               isLoading:false
             })
             this.props.updateUser(UserPhone)
             Actions.push('LandingPage', { Email: UserPhone });
               //Then open Profile activity and send user email to profile activity.
            //   this.props.navigation.navigate('Second');
           }
           else{

             Alert.alert(responseJson);
           }

         }).catch((error) => {
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
            Login Page
          </Text>

          <TextInput placeholder="Phone Number"
          onChangeText={UserPhone => this.setState({UserPhone})}
           placeholderTextColor="white"  style={styles.txtInput} underlineColorAndroid={'transparent'}/>
          <TextInput placeholder="Password"
          onChangeText={UserPassword => this.setState({UserPassword})}
           placeholderTextColor="white" secureTextEntry={true} style={styles.txtInput} underlineColorAndroid={'transparent'}/>


        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.UserLoginFunction.bind('this')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        </View>
      </ImageBackground>
    )

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

const mapDispatchToProps=(dispatch)=>({
  updateUser:(phone_no)=>{dispatch({type:'update_user', userId:phone_no})
}
})

const mapStateToProps = (state) => {
    return {
        username:state.username
    };
}

 export default connect(mapStateToProps, mapDispatchToProps)(Login);
