import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from '@/components/Input'; 





export const CreateNewPassword= () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreatePassword = () => {
    console.log('Nova senha criada:', password);
    
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Crie uma nova senha</Text>
          <Text style={styles.subtitle}>
            Sua nova senha deve ser diferente da última.
          </Text>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            inputType="password"
            value={password}
            onChangeText={setPassword}
            labelStyle={styles.inputLabel}
            inputStyle={styles.input}
          />
          <Input
            label="Confirme sua senha"
            placeholder="Digite sua senha novamente"
            inputType="password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            labelStyle={styles.inputLabel}
            inputStyle={styles.input}
          />
          <TouchableOpacity onPress={handleCreatePassword} style={styles.button}>
            <Text style={styles.buttonText}>Alterar senha</Text>
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
  },
  content: {
    paddingTop: 63,
    flex: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 31,
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
    marginTop: 16
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 21,
    fontFamily: 'Lato-Regular',
    color: '#838BA1',
    letterSpacing: -0.02,
  },
  inputLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Medium',
    color: '#344054',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E5F2',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    lineHeight: 24,
    color: '#1E232C',
    fontFamily: 'Poppins-Regular',
    marginVertical: 8,
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

