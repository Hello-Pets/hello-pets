import { Text, View } from "react-native";

import OnboardingImage from '@/assets/onboarding-image.png'

export function Onboarding() {
  const data = [
    {
      id: 1,
      title: 'Que bom ter você aqui conosco!',
      description: 'Vamos amar acompanhar você e o seu pet nessa jornada. Descubra novas informações, tutores e muito mais!',
      icon: OnboardingImage,
    },
    {
      id: 2,
      title: 'Abraçamos as diversidades',
      description: 'Acolhemos tutores de todos os tipos de pets, pois sabemos que não existe restrições para o amor e cuidado.',
      icon: OnboardingImage,
    },
    {
      id: 3,
      title: 'Crie laços com outros tutores',
      description: 'Cuidar de um pet é uma aventura, então conte com a nossa comunidade para tirar dúvidas e pedir conselhos.',
      icon: OnboardingImage,
    },
    {
      id: 4,
      title: 'Receba recomendações especiais para você',
      description: 'Vamos sempre te atualizar de eventos, clínicas e espaços pet-friendly na sua região.',
      icon: OnboardingImage,
    },
  ];

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Onboarding</Text>
    </View>
  )
}