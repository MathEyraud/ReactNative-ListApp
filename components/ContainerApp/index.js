import { stylesContainerApp } from "./style";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';




export function ContainerApp({children}){


    return (

        <SafeAreaProvider>

            <SafeAreaView style={stylesContainerApp.container}>

            {children}

            </SafeAreaView>

        </SafeAreaProvider>

    )
}