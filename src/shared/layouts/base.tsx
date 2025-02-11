import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StatusBarStyle,
} from 'react-native'
import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface BaseLayoutProps {
  children: ReactNode
  barStyle?: StatusBarStyle
}

export function BaseLayout({
  children,
  barStyle = 'dark-content',
}: BaseLayoutProps) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#FFFFFF' }}
      edges={['top', 'left', 'right']}
    >
      <StatusBar barStyle={barStyle} translucent />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}
