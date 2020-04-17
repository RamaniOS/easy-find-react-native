/*
Search screen
*/

import React, { Component } from 'react'
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from 'react-native'
import styles from './SearchStyle'
import { TitleView, RestaurantList } from '../../components'
import { SearchBar } from 'react-native-elements';
import { APIStore } from '../../api'
import { Colors } from '../../theme'

class Search extends Component {

  // constructor
  constructor(props) {
    super(props);
    this.offset = 0
    this.limit = 20
    this.navigate = this.props.navigation.navigate;
  }

  // State
  state = {
    loading: false, // list loading
    data: [],
    search: '',
    error: '',
    isPagesAvailable: false,
  }

  // Life cycle
  componentDidMount = () => {
    this.fetchList('Toronto', this.offset)
  }

  // Fetch restaurants
  fetchList = (location, offset) => {
    let params = { 'location': location, 'offset': offset }
    this.setState({ loading: true })
    APIStore.get('businesses/search', { params: params })
      .then(response => {
        let listData = this.state.data;
        let data = listData.concat(response.data.businesses) //concate list with response
        this.setState({ loading: false, data: data })
        this.setState({ isPagesAvailable: response.data.total > this.state.data.length })
      }).catch(error => {
        this.setState({ loading: false, error: 'Something just went wrong' })
      });
  }

  // For search
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
    this.offset = 0
    this.setState({ data: [] })
    this.fetchList(this.state.search == '' ? 'Toronto' : this.state.search, this.offset)
  }

  // For pagination
  renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!this.state.loading) return null;
    return (
      <ActivityIndicator
        style={{ color: Colors.theme_color, height: 45 }}
      />
    );
  };

  handleLoadMore = () => {
    if (!this.state.loading && this.state.isPagesAvailable) {
      this.offset += this.limit; // increase page
      this.fetchList('Toronto', this.offset) // method for API call 
    }
  };

  // Render UI objects 
  render() {
    return (
      <>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView></SafeAreaView>
        <View style={styles.mainConatiner}>
          <TitleView title={'Search'}></TitleView>
          <SearchBar
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
              // passing items
              data={this.state.data}
              // did select row
              didSelectRow={(item) => {
                this.navigate('Detail', {
                  item: item
                });
              }}
              // Footer
              listFooter={
                this.renderFooter
              }
              // On end reach
              onEndReached={
                this.handleLoadMore
              }
            />
          </View>
        </View>
      </>
    )
  }
}

export default Search;