import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { Button } from "@/components/Button";
import Google from '@/assets/icons/google.png';
import Facebook from '@/assets/icons/facebook.png';

type SocialButtonType = 'google' | 'facebook';

interface SocialButtonProps {
  type: SocialButtonType;
}

export function SocialButton({ type }: SocialButtonProps) {
  return (
    <Button style={styles.button} variant="default">
      <View style={styles.innerContainer}>
        <Image source={type === 'google' ? Google : Facebook} style={styles.icon} />
        <Text style={styles.text}>{type === 'google' ? 'Entre com Google' : 'Entre com Facebook'}</Text>
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 312,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    paddingHorizontal: 85,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 16, // Ajuste conforme necessário
    height: 16, // Ajuste conforme necessário
    marginRight: 8,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 24,
    color: '#121212',
  },
});
