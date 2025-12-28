import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Anasayfa"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', 
          },
          headerTitleStyle: {
            color: 'white', 
            fontWeight:"bold"
          },
        }}>
      <Stack.Screen name="Anasayfa" component={HomeScreen} />
      <Stack.Screen name="Detaylar" component={DetailScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
