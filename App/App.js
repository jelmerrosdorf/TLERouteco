import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Camera } from './Screens/Camera';
import { Gallery } from './Screens/Gallery';
import { Image1 } from './Screens/Image1';
import { Image2 } from './Screens/Image2';
import { Image3 } from './Screens/Image3';
import { Image4 } from './Screens/Image4';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Gallery'
      >
        <Stack.Screen
        name='Camera'
        component = {Camera}
        />
        <Stack.Screen
        name='Gallery'
        component = {Gallery}
        />
        <Stack.Screen
        name='Image1'
        component = {Image1}
        />
        <Stack.Screen
        name='Image2'
        component = {Image2}
        />
        <Stack.Screen
        name='Image3'
        component = {Image3}
        />
        <Stack.Screen
        name='Image4'
        component = {Image4}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
