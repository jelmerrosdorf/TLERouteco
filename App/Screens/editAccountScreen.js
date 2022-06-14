import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';
import { blue } from '../Styles/Blue';


const EditAccount = ({navigation}) =>{  return (
  
      <View style={blue.container}>
        <Text style={blue.title}
        >RoutEco
        </Text>
        <Text style={blue.text}>
          Edit your account
        </Text>
        <TextInput
          style={blue.TextInput}
          placeholder={"Name"}
          placeholderTextColor={"#f77670"}
          />
        <TextInput
          style={blue.TextInput}
          placeholder={"Email"}
          placeholderTextColor={"#f77670"}
          />
        <TextInput
          style={blue.TextInput}
          placeholder={"Password"}
          placeholderTextColor={"#f77670"}
          />
        <TouchableOpacity
            onPress={()=>{
              navigation.navigate('Login')
            }}
            style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
                      Go to Login
          </Text>
        </TouchableOpacity>
        <Image source={require("../Includes/Images/leafBackground.png")} style={blue.backgroundImage}></Image>
        <TouchableOpacity
            onPress={()=>{
              navigation.navigate('Registrer')
            }}
            style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
              Go to registrer
          </Text>
        </TouchableOpacity>
      </View>
    );
  }


export default EditAccount;