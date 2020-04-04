/*
Style for Signup screen
*/

import {StyleSheet} from 'react-native'
import {Fonts, Colors} from '../../theme'

export default StyleSheet.create({
    safeTop: {
        flex: 0,
        backgroundColor: Colors.theme_color
    },
    mainView: {
        flex: 1
    },
    topView: {
        height: 400,
        backgroundColor: Colors.theme_color,
    },
    title: {
        position: "relative",
        top: 20,
        fontFamily: 'Arial',
        fontSize: 30,
        alignSelf: "center",
        color: '#fff',
        fontWeight: "bold"
    },
    accountTitle: {
        fontFamily: 'Arial',
        bottom: 200,
        fontSize: 20,
        alignSelf: "center",
        color: '#fff'
    },
    bottomView: {
        alignSelf:'center',
        height: 357,
        top: -150,
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    }
})