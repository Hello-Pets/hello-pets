import { Text, TouchableOpacity, View } from "react-native";

import { Social } from "./components/social";
import { Form } from "./components/form";
import { Button } from "react-native-paper";

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