import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';

const Login = ({navigation}) =>{  return (
      <View style={MainStyles.container}>
        <ImageBackground source={require("../Includes/Images/leaf1.jpeg")} resizeMode="cover"  style={MainStyles.imageBackground}>
      <View>
      <Text
      style={MainStyles.title}
      >RoutEco</Text>
      <View>
        <Text
        style={MainStyles.buttonText}
        >Login to your account</Text>
      </View>
      <View>

      <TextInput
        style={MainStyles.TextInputBox}
        placeholder={"Email"}
        />
      <TextInput
        style={MainStyles.TextInputBox}
        placeholder={"Password"}
        />
        </View>
            <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('EditAccount')
                }}
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    go to account
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('Register')
                }}
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    go to Register
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('CameraScreen')
                }}
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    go to Camera
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('Map')
                }}
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    go to map
                </Text>
            </TouchableOpacity>
         </View>
      </ImageBackground>
  </View>
  );
}

export default Login;