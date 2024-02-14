import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppMapView from './AppMapView';
import Header from './Header';
import SearchBar from './SearchBar';
import GlobalApi from '../../Utils/GlobalApi';
import { UserLocationContext } from '../../Context/UserLocationContext';
import PlaceListView from './PlaceListView';

export default function HomeScreen() {
  //사용자의 위치를 컨텍스트에서 가져옴
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  useEffect(() => {
    location && GetNearByPlace();
  }, [location]);
  const GetNearByPlace = () => {
    const data = {
      includedTypes: ['electric_vehicle_charging_station'],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: location?.latitude,
            longitude: location?.longitude,
          },
          radius: 5000.0,
        },
      },
    };

    GlobalApi.NewNearByPlace(data).then((resp) => {
      setPlaceList(resp.data?.places);
    });
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
      <AppMapView />
      <View style={styles.placeListContainer}>
        <PlaceListView placeList={placeList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    padding: 20,
    width: '90%',
    zIndex: 10,
  },
  placeListContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
  },
});
