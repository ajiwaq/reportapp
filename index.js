/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './store/myReducer'


const store = createStore(myReducer);
const AppContainer =()=>
  <Provider store={store}>
  <App/>
  </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
