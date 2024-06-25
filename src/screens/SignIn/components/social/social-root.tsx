import { ReactNode } from 'react'
import { Text, View } from 'react-native'

interface SocialRootProps {
  children: ReactNode
}

export function SocialRoot({ children }: SocialRootProps) {
  return (
    <View className="gap-4">
    <View className="flex-row w-full items-center justify-between">
      <View className="h-[1px] bg-[#E8ECF4] w-1/3" />
      <Text className="text-xs leading-[18px] text-[#6A707C]">Ou entre com</Text>
      <View className="h-[1px] bg-[#E8ECF4] w-1/3" />
    </View>
    <View className="gap-2">
      {children}
    </View>
  </View>
  )
}