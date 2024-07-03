import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { RootStackParamList } from '@/types/types';

type FormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
};

export function Form({ navigation }: FormProps) {
  return (
    <View className="gap-4">
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Senha" placeholder="Digite sua senha" inputType="password" />
      <View className="flex-row items-center justify-between">
        <Checkbox label="Lembrar de mim" labelClasses="text-[#000000]" />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text className="font-medium text-xs leading-[15px]">Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
