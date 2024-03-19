import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Picker} from 'react-native';
import {Content, Container,  List, ListItem, Text, Left, Right, Icon} from 'native-base';


export default class ListView extends Component{
  render(){

    return(
          <List>
          <ListItem selected>
            <Left>
              <Text>Age of Bird</Text>
              <Text></Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
           <Left>
              <Text>Weight for age</Text>
              <Text>Answer</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Daily Gain (g)</Text>
              <Text>Answer</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Daily Feed consumption/Bird(g)</Text>
              <Text>Answer</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Cumulative Feed consumption/Bird(g)</Text>
              <Text>Answer</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Drugs & Vaccines</Text>
              <Text>Answer</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>FEED/FEEDING</Text>
              <Text>Answer</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      );
    }
    }
