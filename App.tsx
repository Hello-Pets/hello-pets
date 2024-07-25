import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { SplashScreen } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

import { Onboarding } from '@/screens/Onboarding/onboarding';
import { SignIn } from '@/screens/SignIn';

import { theme } from '@/styles/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <View onLayout={onLayoutRootView}>
        <SignIn />
      </View>
    </PaperProvider>
  )
}