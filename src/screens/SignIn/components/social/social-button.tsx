import { Image, Text, TouchableOpacity } from "react-native";

import { Button } from "@/components/Button";

import Google from '@/assets/icons/google.png'
import Facebook from '@/assets/icons/facebook.png'

type SocialButtonType =  'google' | 'facebook'

interface SocialButtonProps {
  type: SocialButtonType
}

export function SocialButton({ type }: SocialButtonProps) {
  return (
    <Button className="gap-4 w-full h-max py-3 border-[#E8E8E8] border-[1px]" variant="default">
      <Image source={type === 'google' ? Google : Facebook} className="w-4 h-4" />
      <Text className="text-xs font-medium text-[#121212] leading-6">{type === 'google' ? 'Entre com Google' : 'Entre com Facebook'}</Text>
    </Button>
  )
}