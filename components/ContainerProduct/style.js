import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({

    containerProduct:{
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',

        marginVertical:10,
        borderRadius:20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        overflow: 'visible',
    },

    label:{
        fontSize:20,
    },

})