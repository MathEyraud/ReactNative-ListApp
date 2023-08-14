import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:20,
        gap : 20,
    },

    containerTextInput:{
        flex:2,
        backgroundColor:'white',
        fontSize:20,
        borderRadius:10,
        paddingHorizontal:20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    autoLRow:{
        flexDirection:'row',
        width:'100%',
        height:50,
        gap:10,
    },

    label:{
        fontSize:20,
    },
    
})