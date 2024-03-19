import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container,  List, ListItem, Text, Left, Right, Icon, Card, CardItem, Body, View } from 'native-base';
export default class Day4 extends Component{
    render(){
      return(
        <View>
        <List>
        <ListItem selected>
          <Left>
            <Text style={styles.txtLeft}>Age of Bird</Text>
          </Left>
          <Right>
            <Text style={styles.txtRight}>4</Text>
          </Right>
        </ListItem>
        <ListItem>
         <Left>
            <Text style={styles.txtLeft}>Weight for age (g/bird)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>106 </Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text style={styles.txtLeft}>Daily Gain (g/bird)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>19 </Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text style={styles.txtLeft}>Daily Feed consumption in bags (25Kg)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>{this.props.dfc4} </Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text style={styles.txtLeft}>Cumulative Feed consumption in bags (25Kg)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>{this.props.cfc4}</Text>
          </Right>
        </ListItem>

      </List>
      <Card>
      <CardItem bordered>
        <Body>
          <Text style={styles.txtdrug, styles.txtLeft}> Drugs & Vaccines  </Text>
          <Text style={styles.txtdrug2, styles.txtRight}>Doxineo Vitamins</Text>
        </Body>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={styles.txtLeft}> Feed/Feeding </Text>
          <Text style={styles.txtRight}>Amo Byng Starter Crumbs</Text>
        </Body>
      </CardItem>
    </Card>
    </View>

      )
    }
  }

  const styles = StyleSheet.create({

    txtRight:{
      textAlign:'right',
      color:'green',
      fontSize:17,
    },
    txtdrug:{
      paddingBottom:15,
      marginBottom:10
    },
    txtLeft:{
      fontSize:17,
      color:'blue',
    }
  })
