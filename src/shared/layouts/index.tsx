import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StatusBarStyle,
} from 'react-native'
import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface LayoutProps {
  children: ReactNode
  barStyle?: StatusBarStyle
}

export function Layout({
  children,
  barStyle = 'dark-content',
}: LayoutProps) {
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}
