import * as React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from "@env";

const ubicacion_user= require('../assets/image/ubicacion.png')


export default function MapScreen() {

  <Text>Map</Text>
  const [origin, setOrigin] = React.useState({
    latitude: 12.137072,
    longitude: -86.223546,
  });
  const [destination, setDestination] = React.useState({
    latitude: 12.135813,
    longitude: -86.225023,
  });

  React.useEffect(()=>{
  getLocationPermission();
  }, [])

  async function getLocationPermission() {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso de ubicación denegado');
      return;
    }

   let location = await Location.getCurrentPositionAsync({});
   const current ={
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
   }
   setOrigin(current);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker 
        draggable
        coordinate = {origin}
        image={ubicacion_user}
        
        onDragEnd={(direction)=> setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
        draggable
        coordinate = {destination}
        onDragEnd={(direction)=> setDestination(direction.nativeEvent.coordinate)}
        />
        <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_KEY}
        strokeColor="purple"
        strokeWidth={5}
        />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '90%',
    height: '60%',
  },
});