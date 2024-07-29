import { ReactNode } from 'react'
import { Text, View } from 'react-native'

interface SocialRootProps {
  children: ReactNode
}

export function SocialRoot({ children }: SocialRootProps) {
  return (
    <View>
    <View>
      <Text>Ou entre com</Text>
    </View>
    <View>
      {children}
    </View>
  </View>
  )
}