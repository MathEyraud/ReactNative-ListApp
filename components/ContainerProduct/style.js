import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({

    containerProduct:{
        backgroundColor:'white',
        height:100,
        width:'100%',

        marginTop:20,
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
        
        justifyContent:'center',
        alignItems:'center',
    },

    label:{
        fontSize:20,
    },

})