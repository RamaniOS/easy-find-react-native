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
import { TitleView, RestaurantList } from '../../components'
import { SearchBar } from 'react-native-elements';
import { APIStore } from '../../Api'

class Search extends Component {

  state = {
    data: [],
  }

  fetchList() {
    let params = { 'location': 'toronto' }
    APIStore.get('search', { params: params })
      .then(response => {
        this.setState({
          data: response.data.businesses
        });
      }).catch(error => {
        console.log(error);
      });
  }

  componentDidMount = () => {
    this.fetchList()
  }

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
            <RestaurantList
              data={this.state.data}
              didSelectRow={() => {
                this.props.navigation.navigate('Detail')
              }}
            />
          </View>
        </View>
      </>
    )
  }
}

export default Search;