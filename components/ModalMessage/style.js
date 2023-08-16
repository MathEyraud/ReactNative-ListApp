import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

export const styles = StyleSheet.create({

    containerModal : {
        height:'50%',
        width:'100%',

        padding : 50,
    },

    containerTitle : {
        flex : 1,

        justifyContent:'center',
        alignItems:'center',

        borderTopLeftRadius:20,
        borderTopRightRadius:20,

        backgroundColor:colors.white,
    },

    containerMessage : {
        flex : 2,
        
        justifyContent:'center',
        alignItems:'center',

        paddingHorizontal:20,

        backgroundColor:'red',
        backgroundColor:colors.white,
    },

    containerButton : {
        flex : 1,
        flexDirection:'row',

        justifyContent:'center',
        alignItems:'center',
    },

    containerPressable : {
        flex : 1,
        height:'100%',

        justifyContent:'center',
        alignItems:'center',
    },

})