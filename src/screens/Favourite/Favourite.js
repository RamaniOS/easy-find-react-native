/*
Favourite screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import styles from './FavouriteStyle'
import { TitleView, RestaurantList } from '../../components'
import * as Constants from '../../Constants'
import { fetchRestaurants } from '../../database/allSchemas'

class Favourite extends Component {

  // constructor
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }

  // state 
  state = {
    data: []
  }

  // Life cycle
  componentWillMount() {
    var listData = this.state.data;
    fetchRestaurants().then((restaurants) => {
      restaurants.forEach(json => {
        let restaurant = JSON.parse(json.jsonValue)
        listData.push(restaurant) //concate list with response
      })
      this.setState({ data: listData })
    }).catch((error) => {
      console.log(error);

      alert(Constants.ERROR_LOG)
    })
  }

  // Render UI objects 
  render() {
    return (
      <>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView></SafeAreaView>
        <View style={styles.mainConatiner}>
          <TitleView title={'Favourite'}></TitleView>
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
            />
          </View>
        </View>
      </>
    )
  }
}

export default Favourite;