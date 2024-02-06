import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Pre-Regular': require('./assets/fonts/Pretendard-Regular.otf'),
    'Pre-Medium': require('./assets/fonts/Pretendard-Medium.otf'),
    Jalnan: require('./assets/fonts/Jalnan2.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontSize: 30 }}>헬로우 월드!</Text>
      <Text style={{ fontFamily: 'Pre-Regular', fontSize: 30 }}>헬로우 월드!</Text>
      <Text style={{ fontFamily: 'Jalnan', fontSize: 30 }}>여행가고 싶다!</Text>
      <StatusBar style="auto" />
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
});
