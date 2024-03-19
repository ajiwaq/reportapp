import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import {Content, Container } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import t from 'tcomb-form-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Loading from './Loading';


const Form = t.form.Form;



const User = t.struct({
  full_name:t.String,
  farm_name: t.String,
  state: t.String,
  email_address:t.String,
  farm_capacity:t.String,
  farm_address: t.String
});

var options = {
fields: {
  full_name: {
    error: 'this cannot be empty'
  },
  farm_name: {
    error: 'this cannot be empty'
  },
  state: {
    error: 'this cannot be empty'
  },
  email_address: {
  placeholder: 'Optional',
  error: 'this must be a valid email address',
  },
  farm_capacity: {
  error: 'this cannot be empty',
  },
  farm_address:{
    multiline: true,
    stylesheet: {
      ...Form.stylesheet,
      textbox: {
        ...Form.stylesheet.textbox,
        normal: {
          ...Form.stylesheet.textbox.normal,
          height: 120,
          textAlignVertical: 'top',
          borderColor:'#2192d7',
          borderWidth:2
        },
        error: {
          ...Form.stylesheet.textbox.error,
          height: 120,

        },
      },
    }
  }
}
}

Form.stylesheet.controlLabel.normal.color='#2192d7';
Form.stylesheet.textbox.normal.borderColor='#2192d7',
Form.stylesheet.textbox.normal.borderWidth=2


class ReportForm extends Component{
  constructor(props){
    super(props)
    this.state = {
        value: {
            full_name:'',
            farm_name: '',
            state: '',
            farm_address:'',
            email_address:'',
            farm_capacity:''
        },
        isLoading: false,
        error: false

    }
  }


  clearForm=()=>{

      this.setState({ value: null });
    }

onChange(value){
  this.setState({
    value
  });
}


handleSubmit=()=>{
   var value1 = this.refs.form.getValue();
   if(value1){
     const phone = this.props.phone;
     const full_name = value1.full_name;
     const farm_name = value1.farm_name;
     const state = value1.state;
     const farm_address = value1.farm_address;
     const email_address = value1.email_address;
     const farm_capacity = value1.farm_capacity;
     this.setState({
       isLoading:true
     })
     fetch('https://broilerhub.com/mobile_calculator/add_farmer.php', {
       method: 'POST',
       header:{
         'Accept':'application/json',
         'Content-Type':'application/json',
       },
       body:JSON.stringify({
         phone:phone,
         full_name:full_name,
         farm_name:farm_name,
         state:state,
         farm_address:farm_address,
         email_address:email_address,
         farm_capacity:farm_capacity
       })
     })
     .then((response) => response.json())
       .then((responseJson) => {
          Alert.alert(responseJson);
          Actions.push('LandingPage');
       })
       .catch((error) => {
         console.error(error);
       });

       this.clearForm();
   }
}

render(){
  if(this.state.isLoading == true){
  return (
    <Loading />
  )
}
else{
    return(
      <Container>
        <Content >
    			<View style={styles.container}>
    				<Form type={User}  ref="form" value={this.state.value} options={options} onChange={(value)=>this.onChange.bind(value)}/>

            <TouchableOpacity style={styles.button1} onPress={this.handleSubmit.bind()}>
    					<Text style={styles.buttonText1}>Save</Text>
    				</TouchableOpacity>
    			</View>
        </Content>
      </Container>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop:10,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button1:{
	  width:300,
    marginTop:20,
	  height:50,
	  backgroundColor:'#2192d7',
	  borderRadius:20,
	  justifyContent:'center'
  },
  buttonText1:{
	  color:'white',
	  fontSize:18,
	  textAlign:'center'
  },


});

const mapStateToProps = (state) => {
    return {
        phone:state.username
    };
}

 export default connect(mapStateToProps, null)(ReportForm);
