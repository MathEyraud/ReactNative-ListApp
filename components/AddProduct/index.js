import { View, TextInput, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { styles } from './style'
import Colors from '../../theme/colors'
import InputText from '../InputText'

export default function AddProduct({addProduct}) {

    // ------------------------------- //
    // ---------- VARIABLES ---------- //
    // ------------------------------- //
    const [product, setProduct]             = useState('')
    const [buttonEnabled, setButtonEnabled] = useState(false)
    //
    //
    //
    //
    //
    // ------------------------------------------- //
    // ---------- CHANGEMENT DE L'INPUT ---------- //
    // ------------------------------------------- //
    const handleInputChange = (newValue) => {
        setProduct(newValue)
    }
    //
    //
    //
    //
    //
    // ------------------------------------ //
    // ---------- BOUTON VALIDER ---------- //
    // ------------------------------------ //
    const handleClick = (product) => {
        addProduct(product)
        setProduct("")
    }
    //
    //
    //
    //
    //
    // ------------------------------------------ //
    // ---------- ACTIVATION DU BOUTON ---------- //
    // ------------------------------------------ //
    useEffect(() => {

        if(product.length > 1){
            setButtonEnabled(true)
        }else{
            setButtonEnabled(false)
        }

    },[product])
    //
    //
    //
    //
    //
    // ------------------------------- //
    // ---------- AFFICHAGE ---------- //
    // ------------------------------- //
    return (

        <View style={styles.autoLRow}>

            <InputText    
                placeholder     = "Nouveau produit"
                onChangeText    = {handleInputChange}
                value           = {product}
            />

            <Button
                title           = "Ajouter"
                onPress         = {() => handleClick(product)}
                buttonEnabled   = {buttonEnabled}
                colorButton     = {Colors.secondary}
            />

        </View>
    )
}