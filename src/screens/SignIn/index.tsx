import { Text, View } from "react-native";
import { Button } from "react-native-paper";

import { Social } from "./components/social";
import { Form } from "./components/form";

export function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>

      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Teste
      </Button>
    </View>
  )
}