import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { blue } from '../Styles/Blue';
import { MainStyles } from '../Styles/MainStyles';

const Registrer = ({navigation}) =>{  return (
    <View style={blue.container}>
      <Text style={blue.title}
      >RoutEco
      </Text>
      <Text style={blue.text}>
        Create a new account
      </Text>
      <TextInput
        style={blue.TextInput}
        placeholder={"Name"}
        />
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
            navigation.navigate('Login')
          }}
          style={MainStyles.button}
      >
        <Text style={MainStyles.buttonText}>
                    go to Login
        </Text>
      </TouchableOpacity>
      <Image source={require("../Includes/Images/leafBackground.png")} style={blue.backgroundImage}></Image>
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
    </View>
  );
}

export default Registrer;