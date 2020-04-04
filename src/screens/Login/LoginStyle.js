/*
Style for Login screen
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
        flex: 0.56,
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
        bottom: 120,
        fontSize: 20,
        alignSelf: "center",
        color: '#fff'
    },
    bottomView: {
        alignSelf:'center',
        height: 227,
        top: -80,
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
    },
    signupContainer: {
        alignSelf: "center"
    },
    signupStyle: {
        fontFamily: 'Arial',
        fontSize: 18,
        color: '#000',
        fontWeight: "bold"
    },
    signup: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#000',
        textDecorationLine: 'underline'
    }
})