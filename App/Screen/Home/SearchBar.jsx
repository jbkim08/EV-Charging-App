import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React from 'react';

export default function SearchBar() {
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: apiKey,
          language: 'ko',
        }}
      />
    </View>
  );
}
