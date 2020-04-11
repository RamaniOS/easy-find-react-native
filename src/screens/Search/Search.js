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
import { Input, Button, TitleView, RestaurantList } from '../../components'
import { SearchBar } from 'react-native-elements';
import { APIStore } from '../../Api'
import { set } from 'react-native-reanimated';

class Search extends Component {

  constructor(props) {
    super(props);

  }

  state = {
    data: [],
  }

  fetchList() {
    let params = { 'location': 'toronto' }
    APIStore.get('search', { params: params })
      .then(response => {
        console.log(response.data);

        this.setState({
          data: response.data.businesses
        });
        //let listData = this.state.data;
        //let data = listData.concat(response.data)
        //this.setState({data })
      }).catch(error => {
        alert(error)
        console.log(error);
      });
  }

  componentDidMount = () => {
    // console.log('did');

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