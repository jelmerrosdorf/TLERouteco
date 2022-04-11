import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
// import React, { useState, useEffect, Component} from 'react';
const windowWidth = Dimensions.get('window').windowWidth;


export const Gallery = ({navigation, route}) =>{
    let  images;
    images = require('../Includes/ImageList')
    
    const imageView = images.map((item)=>
    <TouchableOpacity 
    key={item.id}
    onPress={()=>{
        navigation.navigate('ViewImage',{ imageId: item.id})
    }}
    > 
    <Image
    source={item.source}
    style={{
        flex: item.id,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 100,
        width:110,
        margin:30
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
                justifyContent:"space-between",
                // alignContent: "space-between"
                // padding: 20
              }}
            >
            {imageView}

            </View>
        </View>
    )
    
}
