import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { mainStyles } from '../Styles/MainStyles';

export const Home = ({ navigation, route }) => {
    return (
      <View style={mainStyles.page}>
        <Text style={mainStyles.header}>
          Welcome to Routeco!
        </Text>
        <Image
        style={mainStyles.logo}
        source={{
          uri: 'https://i.ibb.co/QKT4cRf/logo.png',
        }}
        />
          <TouchableOpacity style={mainStyles.button}
                onPress={()=>{
                    navigation.navigate('Profile')
                }}
                >
                <Text
                style={{
                    alignSelf:"center",
                    color:"white",
                    padding: 15
                }}
                >
                    go to profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Camera')
                }}
                style={{
                    height:50,
                    width:'70%',
                    alignSelf: "center",
                    backgroundColor:"green",
                    justifyContent:"center"
                }}
                >
                <Text
                style={{
                    alignSelf:"center",
                    color:"white"
                }}
                >
                    go to camera
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Register')
                }}
                style={{
                    height:50,
                    width:'70%',
                    alignSelf: "center",
                    backgroundColor:"green",
                    justifyContent:"center"
                }}
                >
                <Text
                style={{
                    alignSelf:"center",
                    color:"white"
                }}
                >
                    go to register
                </Text>
            </TouchableOpacity>
      </View>
    );
  }
