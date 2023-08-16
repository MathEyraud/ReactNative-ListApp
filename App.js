import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts}                     from 'expo-font'

import Home from './screens/Home';

import AlataRegular from './assets/fonts/Alata-Regular.ttf'


const stack = createNativeStackNavigator();

export default function App() {

  const [isFontLoaded] = useFonts({
    "Alata-Regular" : AlataRegular,
  });
  
  return (
    
    <NavigationContainer>

      {isFontLoaded ? 

        <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>

          <stack.Screen name='Home' component={Home}/>

        </stack.Navigator>
      
      : null}

    </NavigationContainer>

  );
}
