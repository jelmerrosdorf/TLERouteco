import React, {useState, useEffect }from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { MainStyles } from '../Styles/MainStyles';


const Map = ({navigation, route}) =>{
    const [location, setLocation] = useState(null);
    const [longText, setLongText] = useState(null);
    const [latText, setLatText] = useState(null);
    const[errorMsg, setErrorMsg] = useState(null);
    let longitudeInt = 0
    let latitudeInt = 0

    
    useEffect(()=>{
        (async()=>{
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg('Permission was denied :(')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
            
        })();
    }, []);

    let longitudeText
    let latitudeText
    if(errorMsg){
        text = errorMsg
    }else if(location){
        //update marker coords, rerenders marker on map
        latitudeInt = location.coords.latitude
        longitudeInt = location.coords.longitude
        console.log("hello")
    }
    
    function GetCords(){
         Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest,
            maximumAge: 10000,
            timeout: 5000})
            .then(res => setLocation(res))
        }
    return (

    <View style={MainStyles.mapContainer}>
            <MapView style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height}}
                initialRegion={{
                    latitude: 51.91742,
                    longitude: 4.48501,
                    latitudeDelta: 0.1922,
                    longitudeDelta: 0.1421
                  }}
                  mapType='hybrid'
                showsUserLocation
                >
                <Marker coordinate={{
                    latitude: latitudeInt,
                    longitude: longitudeInt,
                }}
                title={"Hello"}
                description={"desc"}
                />
                
            </MapView>
                    <TouchableOpacity
                onPress={()=>{
                  GetCords()
                }}
                style={MainStyles.mapButton}
                >
                <Text
                style={MainStyles.buttonText}
                >
                    U coordinaten zijn:{"\n"}
                    longitude :{location.coords.longitude}{"\n"}
                    latitude :{location.coords.latitude}
                    
                </Text>
            </TouchableOpacity>
            
    </View>
  );
  
}

export default Map;