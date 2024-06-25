import { Text, TouchableOpacity, View } from "react-native";

import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";

export function Form() {
  return (
    <View className="gap-4">
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Senha" placeholder="Digite sua senha" inputType="password" />
      <View className="flex-row items-center justify-between">
        <Checkbox label="Lembrar de mim" labelClasses="text-[#000000]" />
        <TouchableOpacity>
          <Text className="font-medium text-xs leading-[15px]">Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}