import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import { MainStyles } from '../Styles/MainStyles';


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
                style={MainStyles.button}
                >
                <Text
                style={MainStyles.buttonText}
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