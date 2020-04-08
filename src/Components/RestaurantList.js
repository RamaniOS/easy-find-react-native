/*
Class to manage Restaurant List
*/

import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { Images } from '../theme'
import { ItemRestaurant } from '../components'

class RestaurantList extends Component {
    state = {
        DATA: [
            {
                id: '001',
                c_name: 'Mark William Mark',
                c_number: '09898989899',
                c_image: Images.dummy,
            },
            {
                id: '002',
                c_name: 'Sarah Conner',
                c_number: '09898989899',
                c_image: Images.dummy,
            },
            {
                id: '003',
                c_name: 'Bonny Beneth',
                c_number: '09898989899',
                c_image: Images.dummy,
            },
            {
                id: '004',
                c_name: 'Caroline',
                c_number: '09898989899',
                c_image: Images.dummy,
            },
            {
                id: '005',
                c_name: 'Demon Salvator',
                c_number: '09898989899',
                c_image: Images.dummy,
            },
            {
                id: '006',
                c_name: 'Clifton',
                c_number: '09898989899',
                c_image: Images.dummy,
            }
        ]
    }

    render() {
        return (
            <FlatList
                data={this.state.DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemRestaurant item={item} />
                )}
            />
        )
    }
}

export { RestaurantList };
