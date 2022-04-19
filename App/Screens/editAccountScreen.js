import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';

const EditAccount = ({navigation}) =>{  return (
    <View>
      <Text
      style={MainStyles.title}
      >RoutEco</Text>
      <View>
        <Text
        style={{
          alignSelf: "center"
        }}
        >Edit your information</Text>
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
    </View>
  );
}

export default EditAccount;