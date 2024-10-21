import { FC, useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { widthPercentageToDP as vw, heightPercentageToDP as vh, heightPercentageToDP } from 'react-native-responsive-screen';
import * as Location from 'expo-location';

interface LocationType {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface PromosiProps {
  setText: any,
  setModalVisible: any,
  text: any,
  modalVisible: any,
}

const BerandaMap2: FC<PromosiProps> = ({ text, setText, modalVisible, setModalVisible }) => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [online, setOnline] = useState<boolean | true>(true);
  const [promo, setPromo] = useState<boolean | false>(false);

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
            image={require('../assets/images/penjual.png')}
            onPress={() => setModalVisible(true)}
          />
        )}
        {location && text != '' && (
          <Marker
          coordinate={{
            latitude: location.coords.latitude + 0.005,
            longitude: location.coords.longitude,
          }}
        >
          <View style={{ width: 'auto', alignItems: 'center' }}>
            <Text
              style={{
                backgroundColor: '#fff',
                color: "black",
                textAlign: "center",
                width: "100%",
                padding: 5,
                fontWeight: '600',
                borderColor: '#aaa',
                borderRadius: 5,
                borderBottomWidth: 2,
                borderRightWidth: 2,
              }}
            >
              {text}
            </Text>
            <View style={{
              width: 0,
              height: 10, 
              borderLeftWidth: 5,
              borderRightWidth: 5,
              borderTopWidth: 25,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderTopColor: '#aaa',
              }}></View>
          </View>
        </Marker>
        )}
        {location && online && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude + 0.01,
              longitude: location.coords.longitude - 0.01,
            }}
            title='Supratman'
            image={require('../assets/images/pm11.png')}
          />
        )}
        {location && online && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude + 0.0225,
              longitude: location.coords.longitude + 0.0065,
            }}
            title='Brian Halim'
            image={require('../assets/images/pm31.png')}
          />
        )}
        {location && online && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude + 0.008,
              longitude: location.coords.longitude + 0.012,
            }}
            title='Ningsih Suloyo'
            image={require('../assets/images/pm21.png')}
          />
        )}
        {location && online && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude - 0.02,
              longitude: location.coords.longitude + 0.006,
            }}
            title='Es Capcin'
            image={require('../assets/images/pm41.png')}
          />
        )}
      </MapView>
      {errorMsg && (
        <View style={styles.errorContainer}>
          <Text>{errorMsg}</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={() => setOnline(!online)}
      >
        <Image style={{aspectRatio: 1}} source={online ? require('../assets/images/map-switch.png') : require('../assets/images/map-switch-off.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fixedButton2}
        onPress={() => setPromo(!promo)}
      >
        <Image style={{aspectRatio: 1}} source={promo ? require('../assets/images/speaker.png') : require('../assets/images/speaker-off.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%'
  },
  fixedButton: {
    position: 'absolute',
    top: '15%',
    left: '90%', // Center it horizontally
    transform: [{ translateX: -50 }], // Adjust for centering
    backgroundColor: '#fff',
    borderColor: '#444',
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
  },
  fixedButton2: {
    position: 'absolute',
    top: '80%',
    left: '90%', // Center it horizontally
    transform: [{ translateX: -50 }], // Adjust for centering
    backgroundColor: '#fff',
    borderColor: '#444',
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
  },
  map: {
    flex: 1,
  },
  errorContainer: {
    padding: 10,
    backgroundColor: 'red',
  },
  markerLabel: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
    transform: [{ translateY: -30 }],
  },
  markerText: {
    fontSize: 14,
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default BerandaMap2;