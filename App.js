import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider } from '@clerk/clerk-expo';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

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
    <ClerkProvider publishableKey="pk_test_YWxlcnQtbXVsZS0zNi5jbGVyay5hY2NvdW50cy5kZXYk">
      <View style={styles.container} onLayout={onLayoutRootView}>
        <SignedIn>
          <Text>로그인 되었음.</Text>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
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
