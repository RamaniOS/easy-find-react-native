/*
Detail screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './DetailStyle'
import { Input, Button, TitleView, RestaurantList } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { password_regex, user_name_regex } from '../../Utilis'
import * as Constants from '../../Constants'

class Detail extends Component {

  // Render UI objects 
  render() {
    return (
      <>
        <View style={styles.mainConatiner}>
          
        </View>
      </>
    )
  }
}

export default Detail;