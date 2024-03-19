import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Content, Container } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
// import { useSelector } from "react-redux";
import {connect} from 'react-redux';


class AppBody extends Component{
  constructor(props){
    super(props);
  }
render() {
    return(
      <Container>
        <Content >

          <Grid>
            <Col>
              <View style={{height:230, alignItems:'center', justifyContent:"center"}}>
                <Image resizeMode="contain" style={styles.imags}  source={require('../image/download.png')} />
              </View>
            </Col>
            <Col>
              <View style={{height:200, alignItems:'center', justifyContent:"center"}}>
                <Text style={{color:"blue",fontSize:20, textAlign:"center"}}>Farmer Reporting App and Performance Chart </Text>
              </View>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <TouchableOpacity onPress={() => Actions.push('NewFarmer')} style={{backgroundColor: "#26ace2", alignItems:'center', height:150, justifyContent:"center", textAlign:"center", borderRadius:3,  paddingLeft:15, margin:5}}>

                <Icon name="addfile" color="white" size={60} />
                <Text style={styles.textbelow} >Enroll as a natnuPrenuer Farmer</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => Actions.push('SendReport', { userId: this.props.userId })} style={{backgroundColor: "#e874d3", height:150, alignItems:'center', justifyContent:"center", borderRadius:3, paddingLeft:15, margin:5}}>
                <FontAwesome name="send-o" color="white" size={60} />
                <Text style={styles.textbelow} >Send Farm Report/Complaint</Text>
              </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <TouchableOpacity onPress={() => Actions.push('AmoReplies', { userId: this.props.userId })}  style={{backgroundColor: "#ed5565", height:150, alignItems:'center', justifyContent:"center", borderRadius:3, paddingLeft:15, margin:5}}>
                <FontAwesome name="mail-reply-all" color="white" size={60} />
                <Text style={styles.textbelow}>natnuPrenuer Replies</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => Actions.push('ChatApp')} style={{backgroundColor: "#2cc195", height:150, alignItems:'center', justifyContent:"center", borderRadius:3, paddingLeft:15, margin:5}}>
                <Icon name="database" color="white" size={60} />
                <Text style={styles.textbelow}>Use Performance Chart</Text>
              </TouchableOpacity>
            </Col>
          </Grid>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textbelow:{
    fontSize:17,
    marginTop:10,
    color:"white",
    textAlign:"center"
  }
})

const mapStateToProps = (state) => {
    return {
        username:state.username
    };
}

 export default connect(mapStateToProps, null)(AppBody);
