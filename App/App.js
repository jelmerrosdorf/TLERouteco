import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { StyleSheet, Text, View } from 'react-native';


import EditAccount from './Screens/editAccountScreen';
import Login from './Screens/loginScreen';
import Register from './Screens/registerScreen';
import { Camera } from './Screens/Camera';
import { Gallery } from './Screens/Gallery';
import {ViewImage} from './Screens/ViewImage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
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
        name='ViewImage'
        component = {ViewImage}
        />
        <Stack.Screen
        name='Register'
        component = {Register}
        />
        <Stack.Screen
        name='Login'
        component = {Login}
        />
        <Stack.Screen
        name='EditAccount'
        component = {EditAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});