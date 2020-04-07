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
import { Input, Button, TitleView, ItemRestaurant } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { password_regex, user_name_regex } from '../../Utilis'
import * as Constants from '../../Constants'
import { SearchBar } from 'react-native-elements';

class Search extends Component {

  // Constructor
  constructor(props) {
    super(props)
    this.state = {
      items : [
        {
          id: 1,
          title: 'First Item',
        },
        {
          id: 2,
          title: 'Second Item',
        },
        {
          id: 3,
          title: 'Third Item',
        },
      ]
    }
  }

  // Render UI objects 
  render() {
    const items = this.state.items
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
          <FlatList style={styles.listContainer}
            data={items}
            renderItem={({ item }) => (
              <ItemRestaurant item={item} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </>
    )
  }
}

export default Search;