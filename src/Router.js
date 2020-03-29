/*
Router
*/

import React from 'react';
import { Scene, Router} from 'react-native-router-flux';

import {
    Splash,
    Login
} from './screens/index';

const RouterComponent = () => {
    console.log('is cllaed...');
    
    return (
      <Router>
      <Scene key = "root">
         <Scene key = "splash" component = {Splash} title = "Splash" initial = {true} />
         <Scene key = "login" component = {Login} title = "Login" />
      </Scene>
   </Router>
    );
};

export default RouterComponent;