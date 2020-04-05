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
        height: '80%',
        backgroundColor: Colors.theme_color,
    },
    navContainer: {
        top: '10%',
        height: 50
    },
    title: {
        position: 'absolute',
        fontFamily: Fonts.font_bold,
        fontSize: 30,
        alignSelf: "center",
        color: Colors.white
    },
    backButton: {
        alignSelf: "flex-start",
        top: '15%',
        left: 20,
        width: 50,
        height: 50
    },
    accountTitle: {
        fontFamily: Fonts.font_regular,
        bottom: 200,
        fontSize: 22,
        alignSelf: "center",
        color: Colors.white,
    },
    bottomView: {
        alignSelf:'center',
        height: 357,
        top: -150,
        width: '90%',
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    }
})