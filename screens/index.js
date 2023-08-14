import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ContainerApp } from '../components/ContainerApp'
import { styles } from './style'
import ContainerProduct from '../components/ContainerProduct'
import Button from '../components/Button'

export default function Home() {

  const [product, setProduct]       = useState('')
  const [myProducts, setMyProducts] = useState([])
  
  const handleInputChange = (newValue) => {
    setProduct(newValue)
  }

  const addProduct = () => {
    const id = Date.now().toString();
    setMyProducts(currentMyProducts => [{key : id, name : product}, ...currentMyProducts])
    setProduct("")
  }

  return (
    <ContainerApp>

      <View style={styles.container}>

        <View style={styles.autoLRow}>

          <TextInput
            style={styles.containerTextInput}
            placeholder='Nouveau produit'
            onChangeText={handleInputChange}
            value={product}
          />

          <Button
            title="Ajouter"
            onPress={addProduct}
          />

        </View>

        <FlatList
          data={myProducts}
          renderItem={({item}) => <ContainerProduct name={item.name} />}
          //keyExtractor={item => item.key} //Inutile il détecte l'id
        />

      </View>
      
    </ContainerApp>
  )

}