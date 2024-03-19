import React, {Component} from 'react';
import {TextInput, TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class Regform extends Component {
render(){
  return(
    <View style={styles.container}>

    <View style={styles.regTitle}>
    <Text style={styles.regTxt}>Registration Form</Text>
    </View>

    <TextInput placeholder="Full Name" style={styles.txtInput} underlineColorAndroid={'transparent'}/>
    <TextInput placeholder="Email Address" style={styles.txtInput} underlineColorAndroid={'transparent'}/>
    <TextInput placeholder="Password" secureTextEntry={true} style={styles.txtInput} underlineColorAndroid={'transparent'}/>
    <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.txtInput} underlineColorAndroid={'transparent'}/>
    <TouchableOpacity style={styles.tchBtn}><Text style={styles.btntxt}>Submit</Text></TouchableOpacity>

    </View>


  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center'
  },
  regTitle:{
    marginBottom:40,
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:'#199187'
  },
  regTxt:{
    fontSize:24,
    color:'#fff'
  },
  txtInput:{
    marginBottom:30,
    borderBottomWidth:1,
    borderBottomColor:'#f9f9f9',
    alignSelf:'stretch',
    height:40,
    color:'#fff'
  },
  tchBtn:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    marginTop:20,
    backgroundColor:'#59cbbd'
  },
  btntxt:{
    color:'#fff'
  }

});
