import { ReactNode } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SocialRootProps {
  children: ReactNode;
}

export function SocialRoot({ children }: SocialRootProps) {
  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Ou entre com</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.buttonsContainer}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16, // Ajusta o espaçamento vertical
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16, // Ajusta o espaçamento entre o texto e os botões
  },
  divider: {
    height: 1,
    backgroundColor: '#E8ECF4',
    flex: 1,
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 12,
    lineHeight: 18,
    color: '#6A707C',
    fontFamily: 'Poppins-Regular'
  },
  buttonsContainer: {
    gap: 8, // Espaçamento entre os botões
  },
});
