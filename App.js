import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ContainerApp } from './components/ContainerApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';


const stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>

      <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>

        <stack.Screen name='Home' component={Home}/>

      </stack.Navigator>

    </NavigationContainer>

  );
}
