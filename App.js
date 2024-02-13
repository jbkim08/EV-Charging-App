import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import TabNavigation from './App/Navigations/TabNavigation';

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

  const tokenCache = {
    //jwt토큰을 받아서 암호화함
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    //암호화된 토큰을 저장함
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_YWxlcnQtbXVsZS0zNi5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <SignedIn>
          <TabNavigation />
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
    paddingTop: 25,
  },
});
