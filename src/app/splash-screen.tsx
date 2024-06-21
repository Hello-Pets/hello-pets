import { Button } from "@/components/Button";
import { Alert, Text, View } from "react-native";

export function SplashScreen() {
  return (
    <View className="flex-1 justify-center">
      <Text className="text-center text-3xl font-bold">Welcome to the app!</Text>
      <Button label="Clique aqui!" />
    </View>
  )
}