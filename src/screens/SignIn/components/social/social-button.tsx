import { Image, Text, View } from "react-native";

import Google from '@/assets/icons/google.png'
import Facebook from '@/assets/icons/facebook.png'

type SocialButtonType =  'google' | 'facebook'

interface SocialButtonProps {
  type: SocialButtonType
}

export function SocialButton({ type }: SocialButtonProps) {
  return (
    <View>
      <Image source={type === 'google' ? Google : Facebook} />
      <Text>{type === 'google' ? 'Entre com Google' : 'Entre com Facebook'}</Text>
    </View>
  )
}