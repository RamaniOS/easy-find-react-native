/*
App class
*/
import React, { Component } from 'react';
import {
  Splash,
  Login
} from './screens/index'; 
//import Router from './Router';

export default class App extends Component {
  render() {
   return (
          <Login></Login>
      )
  }
}