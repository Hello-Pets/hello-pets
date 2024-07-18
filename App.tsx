import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '@/screens/SignIn';
import ForgotPassword from '@/screens/ForgotPassword';
import EmailCode from '@/screens/EmailCode';
import CreateNewPassword from '@/screens/CreateNewPassword';
import PasswordChangedSuccess from '@/screens/PasswordChangedSuccess';
import '@/styles/global.css';
import { RootStackParamList } from '@/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
          'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
          'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
          'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
          'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        });
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
    <View onLayout={onLayoutRootView} className="flex-1">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EmailCode"
            component={EmailCode} 
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword} 
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PasswordChangedSuccess"
            component={PasswordChangedSuccess} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}