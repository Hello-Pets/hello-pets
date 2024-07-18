import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '@/screens/SignIn';
import ForgotPassword from '@/screens/ForgotPassword';
import EmailCode from '@/screens/EmailCode';
import CreateNewPassword from '@/screens/CreateNewPassword';
import PasswordChangedSuccess from '@/screens/PasswordChangedSuccess';
import { RootStackParamList } from '@/types/types';


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailCode" component={EmailCode} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="PasswordChangedSuccess" component={PasswordChangedSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
