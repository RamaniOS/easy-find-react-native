/*
Style for Search screen
*/

import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../theme'
import { block } from 'react-native-reanimated'

export default StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.white
    },
    topContainer: {
        marginTop: 10,
        height: 44,
    },
    title: {
        color: Colors.black,
        fontSize: 34,
        fontWeight: "bold",
        marginHorizontal: 20
    },
    searchBarContainer: {
        backgroundColor: Colors.white,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        width: '95%',
        alignSelf: 'center',
    },
    inputContainerStyle: {
        backgroundColor: '#F0F0F0',
        borderRadius: 8
    },
    listContainer: {
        flex: 1,
        paddingBottom: 8
    }
})