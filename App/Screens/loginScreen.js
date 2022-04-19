import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';

const Login = ({navigation}) =>{  return (
      <View>

      <View>
      <Text
      style={MainStyles.title}
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
                  navigation.navigate('Camera')
                }}
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    go to Camera
                </Text>
            </TouchableOpacity>
    </View>
  </View>
  );
}

export default Login;