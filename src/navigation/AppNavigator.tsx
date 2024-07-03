import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '@/screens/SignIn';
import ForgotPassword from '@/screens/ForgotPassword';
import EmailCode from '@/screens/EmailCode';
import { RootStackParamList } from '@/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailCode" component={EmailCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
