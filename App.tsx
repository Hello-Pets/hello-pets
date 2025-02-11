import { useCallback, useEffect, useState } from 'react';
import { SplashScreen } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Onboarding } from '@/modules/onboarding/screens/onboarding';
import { SignIn } from '@/modules/auth/screens/sign-in';
import { SignUp } from '@/modules/auth/screens/sign-up';

import { theme } from '@/shared/styles/theme'

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
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <PaperProvider theme={theme}>
        <Onboarding />
      </PaperProvider>
    </GestureHandlerRootView>
  )
}