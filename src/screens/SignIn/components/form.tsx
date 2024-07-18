import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { RootStackParamList } from '@/types/types';

type FormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
};

export function Form({ navigation }: FormProps) {
  return (
    <View style={styles.formContainer}>
      <Input 
        label="E-mail" 
        placeholder="Digite seu e-mail" 
        labelStyle={styles.inputLabel} 
        inputStyle={styles.input}
      />
      <Input 
        label="Senha" 
        placeholder="Digite sua senha" 
        inputType="password" 
        labelStyle={styles.inputLabel} 
        inputStyle={styles.input}
      />
      <View style={styles.row}>
        <Checkbox label="Lembrar de mim" labelClasses={styles.checkboxLabel} />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 8,
    marginBottom: 8,

  },
  inputLabel: {
    color: '#344054',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Poppins-Medium',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E5F2',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    lineHeight:24,
    color: '#1E232C',
    fontFamily: 'Poppins-Medium',
    marginBottom: 1, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8, 
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#000000',
  },
  forgotPassword: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#000000',
  },
});
