import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import colors from '../../theme/colors'
import TextCustom from '../TextCustom'

export default function ModalMessage({
    isVisible,

    title,
    message,
    
    textCancel,
    textConfirm,

    onCancel,
    onConfirm,
}) {


    return (
        <Modal transparent={true} visible={isVisible}>

            <View style={styles.containerModal}>
                
                <View style={styles.containerTitle}>
                    <TextCustom>{title}</TextCustom>
                </View>


                <View style={styles.containerMessage}>
                    <TextCustom>{message}</TextCustom>
                </View>

                <View style={styles.containerButton}>
                
                    <Pressable 
                        style={[styles.containerPressable, {borderBottomLeftRadius:20, backgroundColor:colors.success}]}
                        onPress={onCancel}
                    >
                        <TextCustom style={{color:colors.white}}>{textCancel}</TextCustom>
                    </Pressable>

                    <Pressable 
                        style={[styles.containerPressable,{borderBottomRightRadius:20, backgroundColor:colors.danger}]}
                        onPress={onConfirm}
                    >
                        
                        <TextCustom style={{color:colors.white}}>{textConfirm}</TextCustom>
                    </Pressable>

                </View>

            </View>

        </Modal>
    )
}