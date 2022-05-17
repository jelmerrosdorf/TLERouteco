import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { MainStyles } from '../Styles/MainStyles';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';

export const CameraScreen = ({navigation, route}) =>{
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null)
    const [picture, setPicture] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
   
    
    const takePicture = async  ()=> {
        if(camera){
          const data = await camera.takePictureAsync(null);
          console.log(data.uri)
          setPicture(data.uri)
        }
    } 
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera 
        ref={ref=>setCamera(ref)}

        ratio="16:9" 
        style={styles.camera} 
        type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
        <TouchableOpacity style={MainStyles.button} title="Take Photo" onPress={()=> takePicture()}>
          <Text style={MainStyles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
        {picture && <Image style={{flex:1}} source={{uri:picture}}/>}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
  

//     return(
//         <View>

// <TouchableOpacity
//                 onPress={()=>{
//                     navigation.navigate('Gallery')
//                 }}
//                 style={MainStyles.button}
//                 >
//                 <Text
//                 style={MainStyles.buttonText}
//                 >
//                     go to gallery
//                 </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>{
//                     navigation.navigate('Login')
//                 }}
//                 style={MainStyles.button}
//                 >
//                 <Text
//                 style={MainStyles.buttonText}
//                 >
//                     go to Login
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     )


