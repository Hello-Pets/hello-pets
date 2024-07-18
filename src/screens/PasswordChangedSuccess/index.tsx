import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type PasswordChangedSuccessScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PasswordChangedSuccess'
>;

type Props = {
  navigation: PasswordChangedSuccessScreenNavigationProp;
};

const PasswordChangedSuccess: React.FC<Props> = ({ navigation }) => {
  const handleGoToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('@/assets/onboarding-image.png')} style={styles.image} />
        <Text style={styles.title}>Senha alterada com sucesso!</Text>
        <Text style={styles.subtitle}>
          Agora você pode entrar com sua nova senha.
        </Text>
        <TouchableOpacity onPress={handleGoToSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 21,
    fontFamily: 'Lato-Regular',
    color: '#838BA1',
    textAlign: 'center',
    letterSpacing: -0.02,
  },
  button: {
    backgroundColor: '#1A43BF',
    paddingVertical: 10,
    paddingHorizontal: 80,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 20,
  },
});

export default PasswordChangedSuccess;
