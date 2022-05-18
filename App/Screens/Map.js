import React, {useState, useEffect }from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MainStyles } from '../Styles/MainStyles';

const Map = ({navigation, route}) =>{  
    const [location, setlocation] = useState(null);
    const[errorMsg, setErrorMsg] = useState(null);
    useEffect(()=>{
        (async()=>{
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg('Permission was denied :(')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setlocation(location)
        })();
    }, []);

    let longitudeText
    let latitudeText
    if(errorMsg){
        text = errorMsg
    }else if(location){
        longitudeText = (JSON.stringify(location.coords.longitude))
        latitudeText = (JSON.stringify(location.coords.latitude))
    }
    
    return (

    <View style={MainStyles.mapContainer}>
            <MapView style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height}}
                initialRegion={{
                    latitude: 52.00882,
                    longitude:  4.36038,
                    latitudeDelta: 0.0722,
                    longitudeDelta: 0.0221
                  }}
                  showsUserLocation
                >
                <Marker coordinate={{
                    latitude: 51.91736,
                    longitude: 4.48466,
                }}
                title={"Hello"}
                description={"desc"}
                />
            </MapView>
                    <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('Login')
                }}
                style={MainStyles.mapButton}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    u coordinaten zijn:{"\n"}
                    longitude :{longitudeText}{"\n"}
                    latitude :{latitudeText}
                    
                </Text>
            </TouchableOpacity>
                


    </View>
  );
}

export default Map;