import { StatusBar, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

import '@/styles/global.css'
import { useCallback, useEffect, useState } from 'react';
import { SplashScreen } from 'expo-router';

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
    <>
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onLayout={onLayoutRootView}>
        <Text>SplashScreen Demo! 👋</Text>
      </View>
    </>
  )
}