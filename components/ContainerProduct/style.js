import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../theme/colors'

export const styles = StyleSheet.create({

    containerProduct:{
        height:80,
        width:'100%',

        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        
        gap : 20,
        paddingHorizontal : 20,

        marginVertical:10,
        borderRadius:20,

        shadowColor: Colors.black,
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
        fontSize:24,
    },

})