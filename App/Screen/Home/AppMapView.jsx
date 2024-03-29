import { Image, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapStyle from '../../Utils/MapViewStyle.json';
import { useContext } from 'react';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function AppMapView({ placeList }) {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude,
          }}
        >
          <Image
            source={require('./../../../assets/images/car.png')}
            style={{ width: 35, height: 35 }}
          />
        </Marker>
        {placeList &&
          placeList.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.location?.latitude,
                  longitude: item.location?.longitude,
                }}
              >
                <Image
                  source={require('./../../../assets/images/marker.png')}
                  style={{ width: 25, height: 30 }}
                />
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
