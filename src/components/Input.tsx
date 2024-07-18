import { forwardRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, TextInputProps } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { cn } from '../lib/utils';

type InputType = 'text' | 'password';

export interface InputProps extends TextInputProps {
  label?: string;
  labelStyle?: object;
  inputStyle?: object;
  inputType?: InputType;
}

const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelStyle, inputStyle, inputType = 'text', ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <View style={styles.container}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, inputStyle]}
            placeholderTextColor="#667085"
            secureTextEntry={inputType === 'password' && !isPasswordVisible}
            autoCapitalize="none"
            {...props}
          />
          {inputType === 'password' && (
            <TouchableOpacity style={styles.icon} onPress={() => setIsPasswordVisible((prev) => !prev)}>
              <Feather
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="#000000"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Medium',
    color: '#344054',
  },
  inputWrapper: {
    position: 'relative',
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
  },
  icon: {
    position: 'absolute',
    right: 14,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});

export { Input };
