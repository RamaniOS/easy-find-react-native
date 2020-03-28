/*
Slpash screen
*/

import React, { Component } from 'react'
import Images from '../../theme/'
// import ScreenBG from '../../Components/'
import ScreenBG from '../../Components/'
import {
  View
} from 'react-native'
import styles from './SplashStyle'

class Splash extends Component {
  render() {      
    return (
       <View style={styles.splashScreen}>
         <ScreenBG></ScreenBG>
       </View>
    )
  }
}

export default Splash;
