/*
Router
*/

import React from 'react';
import { Scene, Router} from 'react-native-router-flux';

import {
    Splash,
    Login,
    Signup,
} from './screens/index';

const RouterComponent = () => {
    console.log('is cllaed...');
    
    return (
      <Router>
      <Scene key="root">
         <Scene key = "splash" component = {Splash} title = "Splash" initial = {true} hideNavBar={true}/>
         <Scene key = "Login" component = {Login} title = "Login" hideNavBar={true} gestureEnable={false}
      panHandlers={null}/>
         <Scene key = "Signup" component = {Signup} title = "Signup" hideNavBar={true}/>
      </Scene>
   </Router>
    );
};

export default RouterComponent;