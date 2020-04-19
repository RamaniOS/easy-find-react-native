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

    // state
    state = {
        data: []
    }

    // Life-cycle
    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({ data: this.props.data })
        }
    }

    componentDidMount() {
        this.setState({ data: this.props.data })
    }

    // Fav button action
    favButtonClicked = (index, item) => {
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
                    this.updateFavStatus(index, item)
                }).catch(() => { alert(Constants.ERROR_LOG) })
            } else { // deleting..
                deleteRestaurant(item.id).then(() => {
                    alert(Constants.REMOVED_RESTA)
                    EventRegister.emit(Constants.REFRESH_RESTAURANT)
                    this.updateFavStatus(index, item)
                }).catch(() => { alert(Constants.ERROR_LOG) })
            }
        }).catch(() => { })
    }

    // update fav status
    updateFavStatus = (index, item) => {
        let newData = [...this.state.data]
        newData[index].isFav = !item.isFav
        this.setState({ data: newData })
    }

    // rendering UI elements
    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <ItemRestaurant
                        item={item}
                        onPress={() => this.props.didSelectRow(item)}
                        onFavPress={() => this.favButtonClicked(index, item)}
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
