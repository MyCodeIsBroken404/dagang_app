import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from 'react-native-responsive-screen';
import * as Location from 'expo-location';

// Define type for location state
interface LocationType {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const BerandaMap = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert('Permission Denied', 'Permission to access location was denied');
        return;
      }

      try {
        let { coords } = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        setLocation({ coords });
        console.log('Location:', coords);
      } catch (error) {
        setErrorMsg('Error getting location');
        Alert.alert('Error', 'Error getting location');
        console.error(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // Remove customMapStyle to revert to default map style
        region={{
          latitude: location ? location.coords.latitude : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={`My Location: ${location.coords.latitude.toFixed(4)}, ${location.coords.longitude.toFixed(4)}`}
            image={require('../assets/images/mapperson.png')}
          />
        )}
      </MapView>
      {errorMsg && (
        <View style={styles.errorContainer}>
          <Text>{errorMsg}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%'
  },
  map: {
    flex: 1,
  },
  errorContainer: {
    padding: 10,
    backgroundColor: 'red',
  },
});

export default BerandaMap;