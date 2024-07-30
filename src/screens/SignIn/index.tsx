import { Text, View } from "react-native";

import { Button } from "@/components/button";

export function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>

      <Button type="DANGER" onPress={() => console.log('pressed')} size="SMALL" hasIcon />
    </View>
  )
}