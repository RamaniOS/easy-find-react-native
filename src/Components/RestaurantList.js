/*
Class to manage Restaurant List
*/

import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { ItemRestaurant } from '../components'
import { saveRestaurant, isRestaurantExist, deleteRestaurant } from '../database/allSchemas'
import * as Constants from '../Constants'
import { EventRegister } from 'react-native-event-listeners'

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
            if (!isExist) { // saving..
                saveRestaurant(json).then(() => {
                    alert(Constants.SAVED_RESTA)
                    EventRegister.emit(Constants.REFRESH_RESTAURANT)
                    resolve()
                }).catch(() => {
                    alert(Constants.ERROR_LOG)
                    reject()
                })
            } else { // deleting..
                deleteRestaurant(item.id).then(() => {
                    alert(Constants.REMOVED_RESTA)
                    EventRegister.emit(Constants.REFRESH_RESTAURANT)
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
