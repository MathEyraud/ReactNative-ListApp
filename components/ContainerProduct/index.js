import { View, Text,Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'

export default function ContainerProduct({name, deleteProduct}) {

  return (

    <Pressable 
      style={({pressed}) => [
        {
          backgroundColor: pressed ? "#87cefa" : '#FFF',
        },
        styles.containerProduct,
      ]}
      onLongPress = {deleteProduct}
    >

      <Text style={styles.label}>{name}</Text>
    
    </Pressable>

  )
}