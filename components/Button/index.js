import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import Colors from '../../theme/colors'


export default function Button({
  title,
  buttonEnabled,
  colorButton,
  onPress,
  stylesPressable,
  stylesLabel,
}) {

  return (

    <Pressable 
      style={({pressed}) => [
        {backgroundColor: pressed ? colorButton + '90'  : (buttonEnabled ? colorButton : Colors.disable)},
        {...styles.containerButton,...stylesPressable},
      ]}
      onPress={onPress}
      disabled={!buttonEnabled}
    >

      <Text 
        style={{...styles.label,...stylesLabel}}
      >
        {title}
      </Text>
    
    </Pressable>

  )
}