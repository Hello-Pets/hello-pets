import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    console.log('Enviando código para:', email);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Esqueceu sua senha?</Text>
          <Text style={styles.subtitle}>
            Tudo bem, acontece! Por favor, insira seu e-mail e nós enviaremos um código de verificação.
          </Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={handleSendCode} style={styles.button}>
            <Text style={styles.buttonText}>Enviar código</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Lembrou sua senha?</Text>
          <TouchableOpacity>
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
    paddingTop: 16,
  },
  content: {
    paddingTop: 63,
    flex: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 10,
    fontFamily: 'Poppins-Bold'
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 21,
    fontFamily: 'Lato-Regular',
    color: '#838BA1',
    letterSpacing: -0.02,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Poppins-Medium',
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E5F2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1A43BF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,

  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 20,


  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    marginBottom: 16,
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

