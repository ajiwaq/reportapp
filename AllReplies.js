import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Alert, ListView } from 'react-native';
import {Content, Container, Card, CardItem, Icon, Right, Left, List, ListItem, Body, H2 } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import Loading from './Loading';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class AllReplies extends Component{
  constructor(props){
      super(props)
      this.state={
        isLoading:true,
        dataSource: ""
      }
  }

  componentDidMount() {

    const mapStateToProps = (state) => {
        return {
            phone:state.username
        };
    }

       return fetch('https://broilerhub.com/mobile_calculator/all_report.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           phone: this.props.phone
         })

       })
         .then((response) => response.json())
         .then((responseJson) => {
           if(Array.isArray(responseJson)){
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
          }, function() {
            // In this block you can do something with new state.
          });
        }
        else{
          Alert.alert(responseJson);
          Actions.push('LandingPage');
        }
        })
        .catch((error) => {
          console.error(error);
        });
    }


    ListViewItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

    render() {
     if (this.state.isLoading) {
       return (
         <View style={{flex: 1, paddingTop: 20}}>
           <Loading />
         </View>
       );
     }

     return (

       <View style={styles.container}>

         <ListView

           dataSource={this.state.dataSource}



           renderRow={ (rowData) => <View

                      >


                  <Card>
                  <CardItem header bordered>
                    <Text style={{fontSize:17, color:"blue", justifyContent:"center"}}>Sent Report {rowData.date}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                    <Grid>
                      <Col style={{ width: 30}}><FontAwesome name="checksquareo" color="blue" size={30} /></Col>
                      <Col >
                      <Text style={{fontSize:15, color:"blue",  paddingLeft:10}}>
                        {rowData.comment}
                      </Text>

                      <List>
                      <ListItem noIndent style={{ backgroundColor: "#26ace2" }}>
                    <Left>
                      <Text style={{fontSize:16, color:"#fff", fontWeight:"bold"}}>Reply From natnuPrenuer</Text>
                    </Left>

                  </ListItem>
                  </List>

                      <Text style={{fontSize:15, color:"blue",  paddingLeft:10}}>
                        {rowData.recommendation ? rowData.recommendation : "No reply yet..."}

                      </Text>
                      </Col>
                      <Col style={{ width: 50, paddingLeft:10 }}><Icon name="arrow-forward" color="blue" /></Col>
                      </Grid>

                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                    <Text style={{color:'#000'}}>Date sent {rowData.date}</Text>
                  </CardItem>
                  </Card>

                     </View> }

         />
         <View style={{marginTop:40}}><Text></Text></View>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

    backgroundColor:'#36485f',

  }

});


const mapStateToProps = (state) => {
    return {
        phone:state.username
    };
}

 export default connect(mapStateToProps, null)(AllReplies);
