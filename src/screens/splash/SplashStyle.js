/*
Style for splash screen
*/

import {StyleSheet} from 'react-native'
import {Fonts} from '../../theme/'

export default StyleSheet.create({
    splashScreen:{
        flex:1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    splashLogo: {
        color: '#fff',
        fontSize: 100,
        fontFamily: Fonts.font_regular
    },
    splashTitle: {
        color: '#fff',
        fontSize: 40,
        fontFamily: Fonts.font_light
    }
})