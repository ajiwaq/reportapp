import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container,  List, ListItem, Text, Left, Right, Icon, Card, CardItem, Body, View } from 'native-base';
export default class Day0 extends Component{
    render(){
      return(
        <View>
        <List>
        <ListItem selected>
          <Left>
            <Text style={styles.txtLeft}>Age of Bird</Text>
          </Left>
          <Right>
            <Text style={styles.txtRight}>0</Text>
          </Right>
        </ListItem>
        <ListItem>
         <Left>
            <Text style={styles.txtLeft}>Weight for age (g/bird)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>42 </Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text style={styles.txtLeft}>Daily Gain (g/bird)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>0 </Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text style={styles.txtLeft}>Daily Feed consumption in bags(25Kg)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>0 </Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text style={styles.txtLeft}>Cumulative Feed consumption/Bird(25g)</Text>

          </Left>
          <Right>
            <Text style={styles.txtRight}>0 </Text>
          </Right>
        </ListItem>

      </List>
      <Card>
      <CardItem bordered>
        <Body>
          <Text style={styles.txtdrug, styles.txtLeft}> Drugs & Vaccines  </Text>
          <Text style={styles.txtdrug2, styles.txtRight}>Antibiotics+(Doxineo)+Vitamins+Dextrose</Text>
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
