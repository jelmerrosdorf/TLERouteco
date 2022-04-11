import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';


export const Image1 = ({navigation, route}) =>{
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
                    go back to gallery
                </Text>
            </TouchableOpacity>
                <Image 
                source={require('../Includes/Images/leaf1.jpeg')}
                style={{
                    height:'80%',
                    width:'80%',
                    alignSelf:'center',
                    margin:'10%'
                }}
                />
        </View>
    )


}