import { Image, Text, TouchableOpacity } from "react-native";

import Google from '@/assets/icons/google.png'
import Facebook from '@/assets/icons/facebook.png'
import { Button } from "@/components/Button";

type SocialButtonType =  'google' | 'facebook'

interface SocialButtonProps {
  type: SocialButtonType
}

export function SocialButton({ type }: SocialButtonProps) {
  return (
    <Button className="gap-4 w-full border-[#E8E8E8] border-[1px] py-3" variant="default">
      <Image source={type === 'google' ? Google : Facebook} className="w-4 h-4" />
      <Text className="text-xs font-medium text-[#121212]">{type === 'google' ? 'Entre com Google' : 'Entre com Facebook'}</Text>
    </Button>
  )
}