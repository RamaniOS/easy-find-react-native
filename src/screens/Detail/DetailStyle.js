/*
Style for Detail screen
*/

import {StyleSheet} from 'react-native'
import {Fonts, Colors} from '../../theme'


export default StyleSheet.create({
    mainConatiner: {
        flex: 1,
    },
    topContainer: {
        height: 250,
        backgroundColor: 'pink'
    },
    backButton: {
        alignSelf: "flex-start",
        top: '15%',
        left: 20,
        width: 50,
        height: 50
    },
    bottomContainer: {
        flex: 1,
    },
    infoRowStyle: {
        flex: 1,
        padding: 20
    },
    titleContainer: {
        flexDirection: 'row',
    },
    nameStyle: {
        fontFamily: Fonts.font_bold,
        fontSize: 22,
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
        fontFamily: Fonts.font_regular,
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
})