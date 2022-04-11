import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { mainStyles } from '../Styling/MainStyles';

const App = () => {
  return (
    <View style={mainStyles.page}>
      <Text style={mainStyles.header}>
        Welcome to Routeco!
      </Text>
      <StatusBar style="auto" />
      <Image
      style={mainStyles.logo}
      source={{
        uri: 'https://i.ibb.co/QKT4cRf/logo.png',
      }}
      />
    </View>
  );
}

export default App;

