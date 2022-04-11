import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
// import React, { useState, useEffect, Component} from 'react';
const imageArray = [
    {id: 1, source: require('../Includes/Images/leaf1.jpeg')},
    {id:2, source: require('../Includes/Images/leaf2.jpg')},
    {id:3, source: require('../Includes/Images/leaf3.jpg')},
    {id:4, source: require('../Includes/Images/leaf3.jpg')}
]
const windowWidth = Dimensions.get('window').windowWidth;
    

export const Gallery = ({navigation, route}) =>{

const imageView = imageArray.map((image)=>
<TouchableOpacity 
    key={image.id.toString()}
    onPress={()=>{
        navigation.navigate('Image'+ image.id.toString())
    }}
    > 
    <Image
    source={image.source}
    style={{
        flex: image.id,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 100,
        width:110,
        margin:20
    }}
    />
</TouchableOpacity>
);

    return(
        <View>

            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Camera')
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
                    go to camera
                </Text>
            </TouchableOpacity>
            <View 
             style={{
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent:"space-around",
                // padding: 20
              }}
            >
            {imageView}

            </View>
        </View>
    )
    
}
