/*
App class
*/
import React, { Component } from 'react';
import {
  Splash,
  Login,
  Signup
} from './screens/index'; 
//import Router from './Router';

export default class App extends Component {
  render() {
   return (
          <Signup></Signup>
      )
  }
}