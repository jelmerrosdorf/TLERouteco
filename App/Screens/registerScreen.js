import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Register = ({navigation}) =>{  return (
    <View>
      <Text
      style={{
        fontSize:30,
        alignSelf: "center"
      }}
      >RoutEco</Text>
      <View>
        <Text
        style={{
          alignSelf: "center"
        }}
        >Create a new account</Text>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder={"Name"}
        />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder={"Email"}
        />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          
          borderWidth: 1
        }}
        placeholder={"Password"}
        />
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Login')
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
                    go to Login
                </Text>
            </TouchableOpacity>
                  <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('EditAccount')
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
                    go to account
                </Text>
            </TouchableOpacity>
    </View>
  );
}

export default Register;