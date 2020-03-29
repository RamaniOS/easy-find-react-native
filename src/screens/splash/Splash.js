/*
Slpash screen
*/

import React, { Component } from 'react'
import {Images} from '../../theme'
import {ScreenBG} from '../../components'
import {
  View,
  Text
} from 'react-native'
import styles from './SplashStyle'

class Splash extends Component {

  componentDidMount() {
    console.log("on welcome screen");
  }

  render() {          
    return (
       <View style={styles.splashScreen}>
         <ScreenBG image={Images.splash}></ScreenBG>
         <Text style={styles.splashLogo}>EF</Text>
         <Text style={styles.splashTitle}>EasyFind</Text>
        </View>
    )
  }
}

export default Splash;