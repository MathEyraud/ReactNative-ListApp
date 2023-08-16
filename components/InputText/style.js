import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../theme/colors'
import fonts from '../../theme/fonts'

export const styles = StyleSheet.create({

    containerTextInput:{
        flex:2,
        backgroundColor:Colors.white,
        fontSize:20,
        borderRadius:10,
        paddingHorizontal:20,

        fontFamily: fonts.Primary,

        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

})