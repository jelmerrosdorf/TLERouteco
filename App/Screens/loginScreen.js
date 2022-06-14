import React, {useEffect} from 'react';
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native';
import {decode as atob, encode as btoa} from 'base-64'
import * as FileSystem from 'expo-file-system';
import { asyncStorageIO } from '@tensorflow/tfjs-react-native/dist/async_storage_io';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';
import { blue } from '../Styles/Blue';
import { imag,image, model, tensor4d } from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';

const Login = ({navigation}) =>{ 
  function get(url) {
    return new Promise((accept, reject) => {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";

        req.onload = function(event) {
            var resp = req.response;
            if(resp) {
                accept(resp);
            }
        };

        req.send(null);
    });
}



// useEffect(()=>{
//   (async()=>{
//     await tf.ready()
//     console.log('tf is ready')
    
//     const model = await tf.loadLayersModel(
//       'https://teachablemachine.withgoogle.com/models/TFg2kjodz/model.json');
//     const image = require('../Includes/Images/logo.png')
   
//     const numbers  = Uint8Array.from(atob('hello world'))
//     console.log(numbers)
//     let imageDataArrayBuffer = await get('https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg');
    
//     const imageData = new Uint8Array(imageDataArrayBuffer);
//     // Decode image data to a tensor
//     const imageTensor = decodeJpeg(imageData);
//     const alignCorners = false;
//     // Resize the cropped images to be [1,224,224,3]
//     const imageResize = imageTensor.resizeBilinear(
//       [224, 224],
//       alignCorners
//     );
//       const imageTensor4d = imageResize.as4D(1,224,224,3)

    
//      const prediction = model.predict(imageTensor4d)
//     const predictionData = prediction.arraySync()
//     console.log(Math.max(...predictionData[0]))
   
  
    
//     // imageTensor.resizeBilinear() might need to use it
//         // Resize the cropped images to be [1,224,224,3]
//         // const imageResize = imageTensor.resizeBilinear(
//         //   [224, 224],
//         //   false,
//         //   tensor4d()
//         // );
//         // console.log(imageResize)

//         // const model = tf.sequential();
//     // model.add(tf.layers.dense({units: 5, inputShape: [1]}));
//     // model.add(tf.layers.dense({units: 1}));
//     // model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

//     // // Save the model to async storage
//     // await model.save(asyncStorageIO('custom-model-test'));
//     // // Load the model from async storage
//     // // await tf.loadLayersModel(asyncStorageIO('custom-model-test'));
//     // const newmodel = await tf.loadLayersModel(asyncStorageIO('custom-model-test'));
//     // console.log(newmodel)

// // const modelJSON = require('./model.json')
// // // const modelWeights = require('./weights.bin')
// // await modelJSON.save('model1')
// //       // Load the model from async storage
// //       await tf.loadLayersModel(asyncStorageIO('model1'));
//   })();
// }, []);

  return (
    <View style={blue.container}>
      <Image source={require("../Includes/Images/leafBackground.png")} style={blue.backgroundImage}>
      </Image>
        
          <Text style={blue.title}>
            RoutEco
          </Text>
        <Text style={blue.text}>
            <Text style={blue.textRed}> Login {" "}
            </Text>
            to your account
          </Text>
        <TextInput
          style={blue.TextInput}
          placeholder={"Email"}
          placeholderTextColor={"#f77670"}
        />
        <TextInput
          style={blue.TextInput}
          secureTextEntry={true}
          placeholder={"Password"}
          placeholderTextColor={"#f77670"}
        />
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('EditAccount')
        }}
        style={MainStyles.button}
      >
        <Text style={MainStyles.buttonText}>
          go to account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Registrer')
        }}
        style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
            go to Register
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('CameraScreen')
        }}
        style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
              go to Camera
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Map')
        }}
        style={MainStyles.button}
        >
          <Text style={MainStyles.buttonText}>
            go to map
          </Text>
      </TouchableOpacity>
  </View>
  );
}

export default Login;