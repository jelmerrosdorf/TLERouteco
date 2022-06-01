import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { blue } from '../Styles/Blue';
// import { MainStyles } from '../Styles/MainStyles';

const Welcome = ({navigation}) =>{  return (
    <View style={blue.container}>

            <Text style={blue.title}>
                Welkom bij <Text style={blue.titleRed}>RoutEco</Text>
            </Text>
            <Image source={require("../Includes/Images/logo.png")} style={blue.logo}>

            </Image>
            <Text style={blue.text}>
                Heb je nog geen account?
                {"\n"}
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Registrer')
                    }}
                    >
                    <Text style={blue.textButton}>
                    Registreer  
                    </Text>
                </TouchableOpacity>
                {" "}jezelf nu.
                {"\n"}
                Heb je al een account?
                {"\n"}
                <TouchableOpacity
                 onPress={()=>{
                     navigation.navigate('Login')
                    }}
                    
                    >
                    <Text style={blue.textButton}>
                        Login.
                    </Text>
                </TouchableOpacity>
            </Text>
            <Image source={require("../Includes/Images/leafBackground.png")} style={blue.backgroundImage}>

            </Image>
            
    </View>
  );
}

export default Welcome;