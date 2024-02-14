import { View, Text, FlatList } from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';

//홈에 검색결과를 표시(리스트를 props로 받음)
export default function PlaceListView({ placeList }) {
  return (
    <FlatList
      data={placeList}
      horizontal={true}
      renderItem={({ item, index }) => (
        <View key={index}>
          <PlaceItem place={item} />
        </View>
      )}
    />
  );
}
