/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from "./components/loginScreen/LoginScreen";
import Login from "./pages/login";
import Options from "./pages/options";
import ItemList from "./pages/ItemList";
import Cart from "./pages/cart";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
    screen : "login"
  }

  moveToScreen = (screen) => {
       this.setState({
         screen : screen
       });
  }

  getScreen = (screen) => {
     switch(screen){
       case "login" : return <Login moveToScreen={this.moveToScreen}/>;
       case "cart" : return <Cart moveToScreen={this.moveToScreen}/>;
       case "options" : return <Options moveToScreen={this.moveToScreen}/>;
       case "itemList" : return <ItemList moveToScreen={this.moveToScreen}/>;
       default : return null;
     }
  }

  render() {
    
    return this.getScreen(this.state.screen);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
