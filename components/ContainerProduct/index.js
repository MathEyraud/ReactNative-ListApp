import { View, Text,Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style'
import Colors from '../../theme/colors'

export default function ContainerProduct({
  name, 
  deleteProduct, 
  updateValueProduct,
  value
  }) {

  return (

    <Pressable 
      style={({pressed}) => [
        {
          backgroundColor: pressed ? Colors.primary : Colors.white,
        },
        styles.containerProduct,
      ]}
      onLongPress = {deleteProduct}
      onPress = {updateValueProduct}
    >

      {value ? 
        <AntDesign name="checkcircle" size={24} color={Colors.primary} />
      :
        <AntDesign name="closecircle" size={24} color={Colors.disable} />
      }
      
      <Text style={styles.label}>{name}</Text>
    
    </Pressable>

  )
}