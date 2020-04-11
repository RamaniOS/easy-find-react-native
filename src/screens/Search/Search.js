/*
Search screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList
} from 'react-native'
import styles from './SearchStyle'
import { Input, Button, TitleView, RestaurantList } from '../../Components'
import { SearchBar } from 'react-native-elements';

class Search extends Component {

  // Render UI objects 
  render() {
    return (
      <>
        <SafeAreaView></SafeAreaView>
        <View style={styles.mainConatiner}>
          <TitleView title={'Search'}></TitleView>
          <SearchBar
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder={'Search'}
          />
          <View style={styles.listContainer}>
            <RestaurantList/>
          </View>
        </View>
      </>
    )
  }
}

export default Search;