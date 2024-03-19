import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Regform from './Regform';
import Login from './Login';
import FirstPage from './FirstPage';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import SendReport from './SendReport';
import NewFarmer from './NewFarmer';
import ChatApp from './ChatApp';
import LandingPage from './LandingPage';
import AmoReplies from './AmoReplies';

export default class Routes extends Component<{}>{
  render(){
    return(

  <Router>
   <Stack key="root" hideNavBar={true}>
     <Scene key="FirstPage" component={FirstPage} title="FirstPage"/>
     <Scene key="SignUp" component={SignUp} title="SignUp"/>
     <Scene key="Dashboard" component={Dashboard} title="Dashboard"/>
     <Scene key="Login" component={Login} title="Login"/>
     <Scene key="Regform" component={Regform} title="Regform"/>
     <Scene key="LandingPage" component={LandingPage} title="LandingPage"/>
     <Scene key="SendReport" component={SendReport} title="SendReport"/>
     <Scene key="NewFarmer" component={NewFarmer} title="NewFarmer"/>
     <Scene key="ChatApp" component={ChatApp} title="ChatApp"/>
     <Scene key="AmoReplies" component={AmoReplies} title="AmoReplies"/>
   </Stack>
 </Router>
);
}
}
