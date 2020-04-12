/*
Class to manage Restaurant List
*/

import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { ItemRestaurant } from '../components'

class RestaurantList extends Component {

    render() {
        return (
            <FlatList
                data={this.props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemRestaurant item={item} onPress={() => this.props.didSelectRow(item)} />
                )}
            />
        )
    }
}

export { RestaurantList };
