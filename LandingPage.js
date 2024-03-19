import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, FlatList} from 'react-native';
// For Theme Import
import getTheme from '../themes/components';
import material from '../themes/variables/material';
import {Container, StyleProvider, Drawer} from 'native-base';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppBody from './AppBody';
import {Actions} from 'react-native-router-flux';

export default class Menu extends Component {

  render() {

    return (
      <StyleProvider style={getTheme(material)}>
      <View style={styles.container}>
      <AppHeader headTitle="Broiler Farmer's Tool" />
      <AppBody userId={this.props.Email} />
      <AppFooter/>
      </View>
       </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
