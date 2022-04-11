import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const Camera = ({navigation, route}) =>{
    return(
        <View>

<TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Gallery')
                }}
                style={{
                    height:50,
                    width:'70%',
                    alignSelf: "center",
                    backgroundColor:"green",
                    justifyContent:"center"
                }}
                >
                <Text
                style={{
                    alignSelf:"center",
                    color:"white"
                }}
                >
                    go to gallery
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Login')
                }}
                style={{
                    height:50,
                    width:'70%',
                    alignSelf: "center",
                    backgroundColor:"green",
                    justifyContent:"center"
                }}
                >
                <Text
                style={{
                    alignSelf:"center",
                    color:"white"
                }}
                >
                    go to Login
                </Text>
            </TouchableOpacity>
        </View>
    )


}