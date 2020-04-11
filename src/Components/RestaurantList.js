/*
Class to manage Restaurant List
*/

import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { ItemRestaurant } from '../components'
import { Actions } from 'react-native-router-flux';

class RestaurantList extends Component {

    didSelectRow = (item) => {
        //Actions.Detail()
        this.props.navigation.navigate('Detail')
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemRestaurant item={item} onPress={()=>this.props.didSelectRow()} />
                )}
            />
        )
    }
}

export { RestaurantList };
