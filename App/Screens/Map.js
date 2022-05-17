import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MainStyles } from '../Styles/MainStyles';

const Map = ({navigation, route}) =>{  return (
        



    <View style={MainStyles.mapContainer}>
            <MapView style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height}}
                initialRegion={{
                    latitude: 51.91736,
                    longitude: 4.48466,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                >
                <Marker coordinate={{
                    latitude: 51.91736,
                    longitude: 4.48466,
                }}
                title={"Hello"}
                description={"desc"}
                />
            </MapView>


    </View>
  );
}

export default Map;