import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function InputText({
    placeholder,
    onChangeText,
    value,
    style,
    ...props
    }) {

  return (

    <TextInput
        style           = {{...styles.containerTextInput, ...style}}
        placeholder     = {placeholder}
        onChangeText    = {onChangeText}
        value           = {value}
        {...props}
    />

  )
}