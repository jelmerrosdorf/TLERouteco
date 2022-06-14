import React, {useEffect, useState} from 'react';
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native';
import {decode as atob, encode as btoa} from 'base-64'
import * as FileSystem from 'expo-file-system';
import { asyncStorageIO } from '@tensorflow/tfjs-react-native/dist/async_storage_io';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';
import { blue } from '../Styles/Blue';
import { buffer, imag,image, model, tensor4d } from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';

export const ModelScreen = ({navigation,route})=>{
    const classes = ['Zonnebloem','roos']
    const [result, setResult] = useState(null);
    // function get(url) {
    //     return new Promise((accept, reject) => {
    //         var req = new XMLHttpRequest();
    //         req.open("GET", url, true);
    //         req.responseType = "arraybuffer";
    
    //         req.onload = function(event) {
    //             var resp = req.response;
    //             if(resp) {
    //                 accept(resp);
    //             }
    //         };
    
    //         req.send(null);
    //     });
    // }

    useEffect(()=>{
        (async()=>{
        const {imageUri} = route.params
          await tf.ready()
          console.log('tf is ready')
          
          const model = await tf.loadLayersModel(
            'https://teachablemachine.withgoogle.com/models/TFg2kjodz/model.json');
        
         const imageBase64 = await FileSystem.readAsStringAsync(imageUri,{ encoding:"base64"})
       let imageByte = new Buffer(imageBase64,"base64")
    //    console.log(imageByte)
            // const astring = atob(imageBase64)
            const newArray = new Uint8Array(imageByte)
        //    console.log(newArray)
        //   let imageDataArrayBuffer = await get('https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg');
        //   const imageData = new Uint8Array(imageDataArrayBuffer);
          // Decode image data to a tensor
          const imageTensor = decodeJpeg(newArray);
          const alignCorners = false;
          // Resize the cropped images to be [1,224,224,3]
          const imageResize = imageTensor.resizeBilinear(
            [224, 224],
            alignCorners
          );
            const imageTensor4d = imageResize.as4D(1,224,224,3)
      
          
           const prediction = model.predict(imageTensor4d)
          const predictionArray = prediction.arraySync()
          const highestResult = Math.max(...predictionArray[0])
          let array = [[1,2,3,4]]
          for(let i = 0; i < array[0].indexOf(4); i ++){
            if(predictionArray[0].indexOf(highestResult) == i){
                console.log("Het is een "+classes[i])
                setResult(classes[i])
            }
          }
      
        })();
      }, []);
    return(
        <View>
            <Text>Het is een {result}</Text>
           <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Login')
        }}
        style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
            Terug naar HomeScreen
          </Text>
      </TouchableOpacity>
        </View>
    )

}
