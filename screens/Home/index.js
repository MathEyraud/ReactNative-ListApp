import { View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ContainerApp } from '../../components/ContainerApp'
import { styles } from './style'
import ContainerProduct from '../../components/ContainerProduct'
import Button from '../../components/Button'
import AddProduct from '../../components/AddProduct'

export default function Home() {

  // ------------------------------- //
  // ---------- VARIABLES ---------- //
  // ------------------------------- //
  const [myProducts, setMyProducts] = useState([])
  //
  //
  //
  //
  //
  // ------------------------------- //
  // ---------- XXX ---------- //
  // ------------------------------- //
  
  //
  //
  //
  //
  //
  // ----------------------------------- //
  // ---------- AJOUT PRODUIT ---------- //
  // ----------------------------------- //
  const addProduct = (product) => {

    const id = Date.now().toString();
    setMyProducts(currentMyProducts => [{key : id, name : product}, ...currentMyProducts])

  }
  //
  //
  //
  //
  //
  // ----------------------------------------- //
  // ---------- SUPPRESSION PRODUIT ---------- //
  // ----------------------------------------- //
  const deleteProduct = (key) => {

    setMyProducts(currentMyProducts => {
      return currentMyProducts.filter( product => product.key !== key)
    })
  }
  //
  //
  //
  //
  //
  // ------------------------------- //
  // ---------- AFFICHAGE ---------- //
  // ------------------------------- //
  return (
    <ContainerApp>

      <View style={styles.container}>

        <AddProduct
          addProduct={addProduct}
        />

        <FlatList
          data={myProducts}
          renderItem={({item}) => 
            <ContainerProduct 
              name={item.name} 
              deleteProduct={() => deleteProduct(item.key)}
            />
          }
          keyExtractor={item => item.key}
          //style={{paddingVertical:10, backgroundColor:'green'}}
        />

      </View>
      
    </ContainerApp>
  )
}