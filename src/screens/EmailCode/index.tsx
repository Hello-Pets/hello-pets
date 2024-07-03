// src/screens/EmailCode/index.tsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type EmailCodeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EmailCode'
>;

type Props = {
  navigation: EmailCodeScreenNavigationProp;
};

const EmailCode: React.FC<Props> = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleConfirmCode = () => {
    console.log('Código de verificação:', code.join(''));
  };

  const handleResendCode = () => {
    console.log('Reenviando código...');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Por favor, confira seu e-mail</Text>
          <Text style={styles.subtitle}>
            Enviamos um código para hellopets@gmail.com. Insira-o abaixo para prosseguir com a redefinição de senha.
          </Text>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.codeInput}
                value={digit}
                onChangeText={(value) => handleCodeChange(index, value)}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>
          <TouchableOpacity onPress={handleConfirmCode} style={styles.button}>
            <Text style={styles.buttonText}>Redefinir senha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResendCode} style={styles.resendLink}>
            <Text style={styles.resendText}>Reenviar código em: 00:20</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Lembrou sua senha?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.footerLink}>Entre</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  content: {
    paddingTop: 63,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Lato-Regular',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 67,
    height: 70,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Lato-Regular',
  },
  button: {
    backgroundColor: '#1A43BF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  resendLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  footerLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
  },
});

export default EmailCode;
