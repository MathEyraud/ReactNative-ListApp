import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function Button({title, onPress}) {
  return (

    <Pressable 
      style={styles.containerButton}
      onPress={onPress}
    >

      <Text style={styles.label}>{title}</Text>
    
    </Pressable>

  )
}