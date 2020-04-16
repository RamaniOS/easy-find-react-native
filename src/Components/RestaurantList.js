/*
Class to manage Restaurant List
*/

import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { ItemRestaurant } from '../components'
import { saveRestaurant } from '../database/allSchemas'
import * as Constants from '../Constants'

class RestaurantList extends Component {

    // Fav button action
    favButtonClicked = item => new Promise((resolve, reject) => {
        // creating instance
        let json = {
            jsonValue: JSON.stringify(item)
        }
        // saving..
        saveRestaurant(json).then(() => {
            alert(Constants.SAVED_RESTA)
            resolve()
        }).catch(() => {
            alert(Constants.ERROR_LOG)
            reject()
        })
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
