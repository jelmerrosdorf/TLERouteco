import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { mainStyles } from '../Styles/MainStyles';

export const Profile = ({ navigation, route }) => {
    return (
        <View style={mainStyles.page}>
          <Text>
            Welcome to your profile page!
          </Text>
        </View>
      );
}