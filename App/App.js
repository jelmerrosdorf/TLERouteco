import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import EditAccount from './Screens/editAccountScreen';
import Login from './Screens/loginScreen';
import Register from './Screens/registerScreen';

const Stack = createNativeStackNavigator();

// App shows the end product for user
export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >

        { /* Loginscreen for the temporary code */ }
        <Stack.Screen 
          name="Login"
          component={Login}
          options={ {
            title: "Login",
            headerShown: false,
          } }
        />

        { /* Homescreen, in which it shows all the categories of a certain questionnaire */ }
        <Stack.Screen 
          name="Register"
          component={Register}
        />

        {/* each induvidual category and the questions that belong to that category */}
        <Stack.Screen 
          name="EditAccount" 
          component={EditAccount} 
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