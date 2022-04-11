import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const EditAccount = ({navigation}) =>{  return (
    <View
    style={{
      height:50,
      width:'70%',
      alignSelf: "center",
      backgroundColor:"green",
      justifyContent:"center"
  }}>
      <Text>RoutEco</Text>
      <View>
        <Text>Edit your account</Text>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Email"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Password"
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
                    go to Register
                </Text>
            </TouchableOpacity>
    </View>
  );
}

export default EditAccount;