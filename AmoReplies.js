import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, FlatList} from 'react-native';
// For Theme Import
import getTheme from '../themes/components';
import material from '../themes/variables/material';
import { Container, StyleProvider, Drawer} from 'native-base';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AllReplies from './AllReplies';

export default class SendReport extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <View style={styles.container}>
      <AppHeader headTitle="All Messages"/>
      <AllReplies userId={this.props.userId} />
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
