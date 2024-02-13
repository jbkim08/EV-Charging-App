import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapStyle from '../Utils/MapViewStyle.json';
import { useContext } from 'react';
import { UserLocationContext } from '../Context/UserLocationContext';

export default function AppMapView() {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        customMapStyle={MapStyle}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
