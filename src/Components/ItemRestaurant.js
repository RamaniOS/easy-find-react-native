/*
This class to manage row of restaurant
*/

import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Images } from '../theme'
import { Rating } from 'react-native-elements';

const ItemRestaurant = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatarStyle} />
            <View style={styles.infoRowStyle}>
                <View style={styles.topContainer}>
                    <Text style={styles.nameStyle}>{item.c_name}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Rating
                        readonly
                        type='star'
                        ratingCount={5}
                        imageSize={20}
                        style={styles.ratingStyle}
                        
                    />
                    <Text style={styles.reviewStyle}>2300 Reviews</Text>
                </View>
                <Text style={styles.mealsStyle}>Tea, sancks, meat</Text>
                <Text style={styles.priceStyle}>$$$</Text>
                <Text style={styles.addressStyle}>12 Danum Rd, Brampton</Text>
            </View>
            <View style={styles.favStyle}>
            <TouchableOpacity>
                <Image source={item.isFav ? Images.fav :Images.un_fav} style={{height:26, width: 26}}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row',
    },
    avatarStyle: {
        aspectRatio: 0.75,
        overflow: 'hidden',
        backgroundColor: Colors.placeholder_color
    },
    favStyle: {
        right: 0,
    },
    infoRowStyle: {
        flex: 1,
        marginHorizontal: 8,
        justifyContent: 'center',
    },
    topContainer: {
        flexDirection: 'row',
    },
    nameStyle: {
        fontFamily: Fonts.font_bold,
        fontSize: 20,
        color: Colors.black,
    },
    ratingContainer: {
        marginVertical: 2,
        flexDirection: 'row',
    },
    ratingStyle: {
        marginVertical: 5
    },
    reviewStyle: {
        fontFamily: Fonts.font_light,
        fontSize: 15,
        marginHorizontal: 14,
        alignSelf: 'center',
        marginVertical: 7
    },
    mealsStyle: {
        fontFamily: Fonts.font_regular,
        fontSize: 16,
        color: Colors.black,
        marginVertical: 2
    },
    priceStyle: {
        fontFamily: Fonts.font_regular,
        fontSize: 16,
        color: Colors.black,
        marginVertical: 2
    },
    addressStyle: {
        fontFamily: Fonts.font_light,
        fontSize: 14,
        color: Colors.black,
        marginVertical: 2
    }
});

export { ItemRestaurant };