import { Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { SocialButton } from "./components/social-button";

export function SignIn() {
  return (
    <View className="flex-1 w-full pt-16 px-6 pb-6 justify-between items-center">
      <View className="gap-8">
        <View className="gap-5">
          <View className="gap-2">
            <Text className="font-bold text-2xl text-[#1E232C]">Olá, que bom ver você de novo!</Text>
            <Text className="font-medium text-base text-[#667085]">Entre na sua conta</Text>
          </View>
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
        </View>
        <Button className="bg-[#1A43BF] py-2.5 rounded-lg">
          <Text className="text-[#FAFAFA] text-base font-semibold leading-5">
            Entrar
          </Text>
        </Button>

        <View className="gap-4">
          <View className="flex-row w-full items-center justify-between">
            <View className="h-[1px] bg-[#E8ECF4] w-1/3" />
            <Text className="text-xs leading-[18px] text-[#6A707C]">Ou entre com</Text>
            <View className="h-[1px] bg-[#E8ECF4] w-1/3" />
          </View>
          <View className="gap-2">
            <SocialButton type="google" />
            <SocialButton type="facebook" />
          </View>
        </View>
      </View>

      <View className=" flex-row items-center gap-1 text-sm text-black leading-[17.5px]">
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text className="font-semibold underline">Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}