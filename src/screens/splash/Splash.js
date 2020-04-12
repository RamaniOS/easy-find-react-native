/*
Slpash screen
*/

import React, { Component } from 'react';
import { Images } from '../../theme';
import { ScreenBG } from '../../components';
import { View, Text } from 'react-native';
import styles from './SplashStyle';
import { Actions } from 'react-native-router-flux';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.Login();
    }, 2000);
  }

  render() {
    return (
      <View style={styles.splashScreen}>
        <ScreenBG image={Images.splash} />
        <Text style={styles.splashLogo}>EF</Text>
        <Text style={styles.splashTitle}>EasyFind</Text>
      </View>
    );
  }
}

export default Splash;
