import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from "expo-status-bar";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (

    <View style={styles.container}>
      <View>
        { <Image source={require('../Includes/Images/logoImage.png')} style={styles.logoImage} /> }
        <StatusBar style="auto" />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditAccount')
        }}>
        <Text>go to account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register')
        }}>
        <Text>
          go to Register
        </Text>
      </TouchableOpacity>
      <View>
      { <Image source={require('../Includes/Images/backgroundImage.png')} resizeMode="cover" style={styles.background}></Image>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#57C276",
    alignItems: "center",
    justifyContent: "center",
  },

  logoImage: {
    marginBottom: 20,
  },

  inputView: {
    backgroundColor: "#207C55",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },

  forgot_button: {
    height: 20,
    marginBottom: 5,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#FF1493",
  },

  background: {

  },
});

export default Login;