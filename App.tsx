import { useCallback, useEffect, useState } from 'react';
import { SplashScreen } from 'expo-router';

import { Onboarding } from '@/screens/Onboarding/onboarding';

import '@/styles/global.css'
import { View } from 'react-native';

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
    <View onLayout={onLayoutRootView} className="flex-1 justify-center items-center">
      <Onboarding />
    </View>
  )
}