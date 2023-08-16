import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
//
//
//
//
//
export async function saveProductsList(productsList){

    console.log("Save");

    try{
        await AsyncStorage.setItem("@productsList", JSON.stringify(productsList))

    }catch(error){
        Alert.alert("Error", error)
    }
}
//
//
//
//
//
export async function getProductsList(){  

    console.log("get");

    try{
        const productsList = await AsyncStorage.getItem("@productsList")

        if(productsList !== null){
            return JSON.parse(productsList)

        }else{
            return null
        }

    }catch(error){
        Alert.alert("Error", error)
    }
}