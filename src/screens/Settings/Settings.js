/*
Settings screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './SettingsStyle'
import { Input, Button, TitleView } from '../../Components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { password_regex, user_name_regex } from '../../Utilis'
import * as Constants from '../../Constants'

class Settings extends Component {

  // Render UI objects 
  render() {
    return (
      <>
        <SafeAreaView></SafeAreaView>
        <View style={styles.mainConatiner}>
          <TitleView title={'Settings'}></TitleView>
        </View>
      </>
    )
  }
}

export default Settings;