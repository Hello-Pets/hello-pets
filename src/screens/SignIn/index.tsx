import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Olá, que bom ver você de novo!</Text>
        <Text style={styles.subtitle}>Entre na sua conta</Text>
        
        <Form navigation={navigation} />
        
        <Button style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Button>


        <Social.Root>
          <Social.Button type="google" />
          <Social.Button type="facebook" />
        </Social.Root>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom:48,
  },
  title: {
    color: '#1E232C',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 31.2,
    marginBottom: 8,
    marginTop: 16,
  },
  subtitle: {
    color: '#667085',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#1A43BF',
    height: 40,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },
  footerText: {
    color: '#667085',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  footerLink: {
    color: 'black',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
});
