import { View, FlatList, Alert, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ContainerApp } from '../../components/ContainerApp'
import { styles } from './style'
import ContainerProduct from '../../components/ContainerProduct'
import Button from '../../components/Button'
import AddProduct from '../../components/AddProduct'
import {getProductsList, saveProductsList} from '../../utils/products'
import ModalMessage from '../../components/ModalMessage'

//Variable pour éviter d'avoir un rendu lors du 1er chargement
let firstRender = true;
let isLoadUpdate = false;

export default function Home() {

  // ------------------------------- //
  // ---------- VARIABLES ---------- //
  // ------------------------------- //
  const [myProducts, setMyProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedProductKey,setSelectedProductKey] = useState()
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
    setMyProducts(currentMyProducts => [{key : id, name : product, value : false}, ...currentMyProducts]);
  }
  //
  //
  //
  //
  //
  // ----------------------------------------- //
  // ---------- SUPPRESSION PRODUIT ---------- //
  // ----------------------------------------- //
  const handleConfirmMessageOpen = (key) => {
    setShowModal(true);
    setSelectedProductKey(key);
  }

  const handleConfirmMessageClose = () => {
    setShowModal(false);
    setSelectedProductKey(null);
  }

  const deleteProduct = () => {
    setMyProducts(currentMyProducts => {
      return currentMyProducts.filter( product => product.key !== selectedProductKey)
    });
    setShowModal(false);
  }
  //
  //
  //
  //
  //
  // ------------------------------------------- //
  // ---------- UPDATE VALEUR PRODUIT ---------- //
  // ------------------------------------------- //
  const updateValueProduct = (key) => {

    setMyProducts(currentMyProducts => {

      return currentMyProducts.map(product => {

        if (product.key === key){
          return {...product, value : !product.value}

        }else{
          return product;
        }
      
      })
    })
  }
  //
  //
  //
  //
  //
  // -------------------------------------------------- //
  // ---------- AU DEMARAGE DE L'APPLICATION ---------- //
  // -------------------------------------------------- //
  useEffect(() => {

    const fetchProducts = async () => {

      const storedProducts = await getProductsList();

      if (storedProducts !== null) {
        isLoadUpdate = true;
        setMyProducts(storedProducts);
      }
    }

    fetchProducts();

  },[])
  //
  //
  //
  //
  //
  // -------------------------------------- //
  // ---------- MAJ "myProducts" ---------- //
  // -------------------------------------- //
  useEffect(() => { 

    const fetchProducts = async () => {

      if(isLoadUpdate === false){

        if(firstRender === false){

          await saveProductsList(myProducts);

        }else{
          firstRender = false
        }
      }else{
        isLoadUpdate = false;
      }
    }
    
    fetchProducts();

  },[myProducts])
  //
  //
  //
  //
  //
  // ------------------------------- //
  // ---------- AFFICHAGE ---------- //
  // ------------------------------- //
  return (

    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{flex:1}}
      blurRadius={10}
    >

      <ContainerApp>

        <ModalMessage 
          isVisible={showModal}
          title="ATTENTION"
          message="Etes-vous sure de vouloir supprimer cet item ?"

          textCancel="CONSERVER"
          textConfirm="SUPPRIMER"

          onCancel={() => handleConfirmMessageClose()}
          onConfirm={() => deleteProduct()}
        />

        <View style={styles.container}>

          <AddProduct
            addProduct={addProduct}
          />

          <FlatList
            data={myProducts}
            renderItem={({item}) => 
              <ContainerProduct 
                name                = {item.name} 
                value               = {item.value}
                deleteProduct       = {() => handleConfirmMessageOpen(item.key)}
                updateValueProduct  = {() => updateValueProduct(item.key)}
              />
            }
            keyExtractor={item => item.key}
            //style={{paddingVertical:10, backgroundColor:'green'}}
          />

        </View>

      </ContainerApp>
      
    </ImageBackground>
  )
}