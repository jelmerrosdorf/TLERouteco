import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';
import { blue } from '../Styles/Blue';

const Login = ({navigation}) =>{  return (
      <View style={blue.container}>
        
          <Text style={blue.title}>
            RoutEco
          </Text>
        <Text style={blue.text}>
            <Text style={blue.textRed}> Login {" "}
            </Text>
            to your account
          </Text>
        <TextInput
          style={blue.TextInput}
          placeholder={"Email"}
        />
        <TextInput
          style={blue.TextInput}
          placeholder={"Password"}
        />
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('EditAccount')
        }}
        style={MainStyles.button}
      >
        <Text style={MainStyles.buttonText}>
          go to account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Registrer')
        }}
        style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
            go to Register
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('CameraScreen')
        }}
        style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
              go to Camera
          </Text>
      </TouchableOpacity>
      <Image source={require("../Includes/Images/leafBackground.png")} style={blue.backgroundImage}>

      </Image>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Map')
        }}
        style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
            go to map
          </Text>
      </TouchableOpacity>
  </View>
  );
}

export default Login;