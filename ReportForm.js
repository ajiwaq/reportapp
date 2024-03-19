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
  farm_name:t.String,
  age_of_bird: t.Number,
  stock_size: t.Number,
  avg_weight: t.Number,
  mortality:t.Number,
  comment:t.String
});

var options = {
fields: {
  farm_name: {
    placeholder: 'Farm Name',
    error: 'this cannot be empty'
  },
  mortality: {
    placeholder: 'Mortality in %',
    error: 'this must be a number'
  },
  avg_weight: {
    placeholder: 'Weight in Kg',
    error: 'this must be a number'
  },
  age_of_bird: {
  placeholder: 'Age in days',
  error: 'this must be a number',
  },
  stock_size: {
  placeholder: 'Stock in number',
  error: 'this must be a number',
  },
  comment:{
    multiline: true,
    stylesheet: {
      ...Form.stylesheet,
      textbox: {
        ...Form.stylesheet.textbox,
        normal: {
          ...Form.stylesheet.textbox.normal,
          height: 150,
          textAlignVertical: 'top',
          borderColor:'#2192d7',
          borderWidth:2
        },
        error: {
          ...Form.stylesheet.textbox.error,
          height: 200,

        },
      },
    }
  }
}
}

const options2 = {
	 title:'Select a photo',
	 takePhotoButtonTitle:'Take a photo',
	 chooseFromLibraryButtonTitle:'choose from gallery',
	 quality:1

}

Form.stylesheet.controlLabel.normal.color='#2192d7';
Form.stylesheet.textbox.normal.borderColor='#2192d7',
Form.stylesheet.textbox.normal.borderWidth=2


class ReportForm extends Component{
  constructor(props){
    super(props)
    this.state = {
        value: {
            farm_name:'',
            age_of_bird: '',
            stock_size: '',
            avg_weight:'',
            mortality:'',
            comment:''
        },
        isLoading: false,
        error: false,
		    imageSource:null,
        date:''

    }
  }


  clearForm() {

      this.setState({ value: null });
    }



  getInitialState() {
     return {
       value: {
         stock_size:this.state.age_of_bird
       }
     };
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
     const currentDate = this.state.date;
     const farm_name = value1.farm_name;
     const bird_age = value1.age_of_bird;
     const stock_size = value1.stock_size;
     const weight = value1.avg_weight;
     const mortality = value1.mortality;
     const comment = value1.comment;
     this.setState({
       isLoading:true
     })
     fetch('https://broilerhub.com/mobile_calculator/send_report.php', {
       method: 'POST',
       header:{
         'Accept':'application/json',
         'Content-Type':'application/json',
       },
       body:JSON.stringify({
         phone:phone,
         farm_name:farm_name,
         bird_age:bird_age,
         stock_size:stock_size,
         weight:weight,
         mortality:mortality,
         comment:comment,
         date:currentDate
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

componentDidMount(){
var that = this;
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds
that.setState({
  //Setting the value of the date time
  date:
    date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
});
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

				<TouchableOpacity style={styles.button1} onPress={this.handleSubmit} underlayColor='#99d9f4'>
					<Text style={styles.buttonText1}>Send</Text>
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
  image:{
	  width:200,
	  height:200,
	  marginTop:30
  }

});

const mapStateToProps = (state) => {
    return {
        phone:state.username
    };
}

 export default connect(mapStateToProps, null)(ReportForm);
