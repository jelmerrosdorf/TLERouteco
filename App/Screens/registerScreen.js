import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';

const Register = ({navigation}) =>{  return (
    <View>
      <Text
      style={MainStyles.TextInputBox}
      >RoutEco</Text>
      <View>
        <Text
        style={{
          alignSelf: "center"
        }}
        >Create a new account</Text>
      </View>
      <TextInput
        style={MainStyles.TextInputBox}
        placeholder={"Name"}
        />
      <TextInput
        style={MainStyles.TextInputBox}
        placeholder={"Email"}
        />
      <TextInput
        style={MainStyles.TextInputBox}
        placeholder={"Password"}
        />
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Login')
                }}
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    go to Login
                </Text>
            </TouchableOpacity>
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
    </View>
  );
}

export default Register;