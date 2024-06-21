import { StatusBar } from 'react-native'

import '@/styles/global.css'
import { SplashScreen } from '@/app/splash-screen'

export default function App() {
  return (
    <>
      <SplashScreen />
      <StatusBar barStyle="dark-content" />
    </>
  )
}