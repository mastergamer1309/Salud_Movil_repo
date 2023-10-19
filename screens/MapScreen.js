import React, { useEffect, useState, useRef } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from "@env";
import CustomButton from '../Components/CustomButton';

const ubicacion_user = require('../assets/image/ubicacion.png');

export default function MapScreen() {
  const [origin, setOrigin] = useState({
    latitude: 12.137072,
    longitude: -86.223546,
  });
  const [destination, setDestination] = useState({
    latitude: 12.135813,
    longitude: -86.225023,
  });

  const [nearbyPharmacies, setNearbyPharmacies] = useState([]);
  const [showPharmacies, setShowPharmacies] = useState(false);

  const mapRef = useRef(null); 

  useEffect(() => {
    getLocationPermission();
  }, []);

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso de ubicación denegado');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    setOrigin(current);

    findNearbyPharmacies(current.latitude, current.longitude);
  }

  async function findNearbyPharmacies(userLat, userLng) {
    try {
      const pharmaciesData = await fetchFarmaciesFromAPI(userLat, userLng);

      setNearbyPharmacies(pharmaciesData);
      setShowPharmacies(pharmaciesData.length > 0);
    } catch (error) {
      console.error('Error al obtener datos de farmacias cercanas', error);
    }
  }

  async function fetchFarmaciesFromAPI(userLat, userLng) {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLat},${userLng}&radius=5000&type=pharmacy&key=${GOOGLE_MAPS_KEY}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status === 'OK' && data.results) {
        return data.results.map(pharmacy => ({
          latitude: pharmacy.geometry.location.lat,
          longitude: pharmacy.geometry.location.lng,
          name: pharmacy.name,
          vicinity: pharmacy.vicinity
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al obtener datos de farmacias cercanas', error);
      return [];
    }
  }

  async function locateNearestPharmacy() {
    if (nearbyPharmacies.length > 0) {
      const nearestPharmacy = nearbyPharmacies[0];
      setDestination({
        latitude: nearestPharmacy.latitude,
        longitude: nearestPharmacy.longitude,
      });

      const region = {
        latitude: nearestPharmacy.latitude,
        longitude: nearestPharmacy.longitude,
        latitudeDelta: 0.03, 
        longitudeDelta: 0.03,
      };

      mapRef.current.animateToRegion(region, 1000); 
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
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
          coordinate={origin}
          image={ubicacion_user}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="purple"
          strokeWidth={5}
        />
        {showPharmacies &&
          nearbyPharmacies.map((pharmacy, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: pharmacy.latitude,
                longitude: pharmacy.longitude
              }}
              title={pharmacy.name}
              description={pharmacy.vicinity}
            />
          ))
        }
      </MapView>
      <CustomButton text='Ubicar en la farmacia mas cercana' onPress={locateNearestPharmacy} 
      />

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
  locateButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});