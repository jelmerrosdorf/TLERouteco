import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { StyleSheet, Text, View } from 'react-native';


import EditAccount from './Screens/editAccountScreen';
import Login from './Screens/loginScreen';
import Registrer from './Screens/RegistrerScreen';
import { CameraScreen } from './Screens/CameraScreen';
import { Gallery } from './Screens/Gallery';
import {ViewImage} from './Screens/ViewImage';
import Map from './Screens/Map';
import Welcom from './Screens/WelcomScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='WelcomeScreen'
      >
        <Stack.Screen name='CameraScreen' component = {CameraScreen}/>
        <Stack.Screen name='Gallery' component = {Gallery}/>
         <Stack.Screen name='ViewImage' component = {ViewImage}/>
        <Stack.Screen name='Registrer' component = {Registrer}/>
        <Stack.Screen name='Login' component = {Login}
        options={{
          headerStyle:{
            backgroundColor:"#a9d0e7",
          },
          headerTintColor:"#24305e"
        }}
        />
        <Stack.Screen name='EditAccount' component = {EditAccount}/>
       <Stack.Screen
      //  options={{headerShown: false}}
          name='Map'
          component = {Map}
        />
         <Stack.Screen 
          options={{headerShown: false}}
          name='WelcomeScreen'
          component = {Welcom}
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