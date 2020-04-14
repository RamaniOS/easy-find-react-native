/*
Search screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  SafeAreaView,
} from 'react-native'
import styles from './SearchStyle'
import { TitleView, RestaurantList } from '../../components'
import { SearchBar } from 'react-native-elements';
import { APIStore } from '../../api'

class Search extends Component {

  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }

  state = {
    data: [],
    search: ''
  }

  updateSearch = (text) => {
    this.setState({ search: text });
  };

  searchButtonClicked = () => {
    this.fetchItems()
  }

  onClearButtonClicked = () => {
    setTimeout(() => {
      this.fetchItems()
    }, 500);
  }

  fetchItems = () => {
    this.fetchList(this.state.search == '' ? 'Toronto' : this.state.search)
  }

  fetchList(location = 'Toronto') {
    let params = { 'location': location }
    APIStore.get('businesses/search', { params: params })
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
            color='red'
            keyboardType="default"
            returnKeyType="done"
            autoCorrect={false}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder={'Search'}
            onChangeText={this.updateSearch}
            value={this.state.search}
            onSubmitEditing={this.searchButtonClicked}
            onClear={this.onClearButtonClicked}
          />
          <View style={styles.listContainer}>
            <RestaurantList
              data={this.state.data}
              didSelectRow={(item) => {
                this.navigate('Detail', {
                  item: item
                });
              }}
            />
          </View>
        </View>
      </>
    )
  }
}

export default Search;