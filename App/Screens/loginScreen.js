import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const Login = ({navigation}) =>{  return (
      <View>

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
        >Login to your account</Text>
      </View>
      <View>

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
        </View>
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
                    go to Camera
                </Text>
            </TouchableOpacity>
    </View>
  </View>
  );
}

export default Login;