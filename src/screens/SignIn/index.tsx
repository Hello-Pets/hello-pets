// src/screens/SignIn/index.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@/components/Button';
import { Social } from './components/social';
import { Form } from './components/form';
import { RootStackParamList } from '@/types/types';

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

export function SignIn({ navigation }: Props) {
  return (
    <View className="flex-1 w-full pt-16 px-6 pb-6 justify-between items-center">
      <View className="gap-8">
        <View className="pt-4 gap-5">
          <View className="gap-2">
            <Text className="font-bold text-2xl text-[#1E232C]">Olá, que bom ver você de novo!</Text>
            <Text className="font-medium text-base text-[#667085]">Entre na sua conta</Text>
          </View>
          
          <Form navigation={navigation}/>
        </View>
        
        <Button className="bg-[#1A43BF] py-2.5 rounded-lg">
          <Text className="text-[#FAFAFA] text-base font-semibold leading-5">
            Entrar
          </Text>
        </Button>

        <Social.Root>
          <Social.Button type="google" />
          <Social.Button type="facebook" />
        </Social.Root>
      </View>



      <View className="flex-row items-center gap-1 text-sm text-black leading-[17.5px]">
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text className="font-semibold underline">Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
