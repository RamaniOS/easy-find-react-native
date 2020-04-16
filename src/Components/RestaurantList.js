/*
Class to manage Restaurant List
*/

import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { ItemRestaurant } from '../components'
import { saveRestaurant, isRestaurantExist } from '../database/allSchemas'
import * as Constants from '../Constants'

class RestaurantList extends Component {

    // Fav button action
    favButtonClicked = item => new Promise((resolve, reject) => {
        // creating instance
        let json = {
            id: item.id,
            jsonValue: JSON.stringify(item)
        }
        // checking restaurant already exist or not
        isRestaurantExist(item.id).then((isExist) => {
            // saving..
            if (!isExist) {
                saveRestaurant(json).then(() => {
                    alert(Constants.SAVED_RESTA)
                    resolve()
                }).catch(() => {
                    alert(Constants.ERROR_LOG)
                    reject()
                })
            }
        }).catch(() => { })
    })

    // rendering UI elements
    render() {
        return (
            <FlatList
                data={this.props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemRestaurant
                        item={item}
                        onPress={() => this.props.didSelectRow(item)}
                        onFavPress={() => this.favButtonClicked(item)}
                    />
                )}
                ListFooterComponent={this.props.listFooter}
                onEndReachedThreshold={0.1}
                onEndReached={this.props.onEndReached}
            />
        )
    }
}

export { RestaurantList };
