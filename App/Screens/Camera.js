import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MainStyles } from '../Styles/MainStyles';

export const Camera = ({navigation, route}) =>{
    return(
        <View>

<TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Gallery')
                }}
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    go to gallery
                </Text>
            </TouchableOpacity>
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
        </View>
    )


}