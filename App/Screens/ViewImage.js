import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';


export const ViewImage = ({navigation, route}) =>{
    const images = require('../Includes/ImageList');
    const { imageId } = route.params;
    let pickedImage;
    for (let image of images)
    {
        if (image.id == imageId) {
            pickedImage = image;
        }
    }
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
                source={pickedImage.source}
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