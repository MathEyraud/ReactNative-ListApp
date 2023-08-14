import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function ContainerProduct({name}) {
  return (

    <Pressable 
      style={styles.containerProduct}
    >

      <Text style={styles.label}>{name}</Text>
    
    </Pressable>

  )
}