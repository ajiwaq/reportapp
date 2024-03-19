import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class AppHeader extends Component{
  render(){
    return(
      <Header hasTabs>
      <Left>
      <Button transparent onPress={() => Actions.push('LandingPage')}>
              <Icon name="arrow-back" />
            </Button>
      </Left>
      <Body>
      <Title>{this.props.headTitle}</Title>
      </Body>

      </Header>
    );
  }
}
