/*
Favourite screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './FavouriteStyle'
import { Input, Button, TitleView, RestaurantList } from '../../Components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { password_regex, user_name_regex } from '../../Utilis'
import * as Constants from '../../Constants'

class Favourite extends Component {

  // Render UI objects 
  render() {
    return (
      <>
        <SafeAreaView></SafeAreaView>
        <View style={styles.mainConatiner}>
          <TitleView title={'Favourite'}></TitleView>
          <View style={styles.listContainer}>
            <RestaurantList/>
          </View>
        </View>
      </>
    )
  }
}

export default Favourite;