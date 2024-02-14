import { View, Text, Dimensions, Image } from 'react-native';
import React from 'react';

export default function PlaceItem({ place }) {
  return (
    <View
      style={{
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
      }}
    >
      <Image
        source={require('./../../../assets/images/station.png')}
        style={{ width: '100%', borderRadius: 10, height: 130 }}
      />
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 17, fontFamily: 'Jalnan' }}>{place.displayName?.text}</Text>
        <Text style={{ color: 'gray', fontSize: 13 }}>{place?.shortFormattedAddress}</Text>
        <Text style={{ fontFamily: 'Pre-Medium' }}>
          충전기기수 : {place?.evChargeOptions?.connectorCount ?? '모름'}
        </Text>
      </View>
    </View>
  );
}
