import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function LoginScreen() {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}
    >
      <Image source={require('./../../assets/images/logo.png')} style={styles.logoImage} />
      <Image source={require('./../../assets/images/bg-logo.png')} style={styles.bgImage} />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>EV 충전소를 찾는 APP</Text>
        <Text style={styles.desc}>여러분 근처의 충전소를 빠르게 찾을 수 있습니다.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: '70%',
    height: 60,
    objectFit: 'contain',
  },
  bgImage: {
    width: '100%',
    height: 250,
    marginTop: 20,
    objectFit: 'cover',
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Jalnan',
    textAlign: 'center',
    marginTop: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: 'Pre-Regular',
    marginTop: 15,
    textAlign: 'center',
    color: '#000',
  },
});
