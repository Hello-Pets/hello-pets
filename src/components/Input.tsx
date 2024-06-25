import { forwardRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { cn } from '../lib/utils';

type InputType = 'text' | 'password'

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  inputType?: InputType;
}

const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, inputType = 'text', ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
      <View className={cn('flex flex-col gap-1.5', className)}>
        {label && <Text className={cn('text-sm color-[#344054] leading-5 font-medium', labelClasses)}>{label}</Text>}
        <View>
          <TextInput
            className={cn(
              inputClasses,
              'border border-input py-2.5 px-3 rounded-lg relative h-11 text-[#101828] text-base placeholder:text-[#667085] leading-6'
            )}
            {...props}
            secureTextEntry={inputType === 'password' && !isPasswordVisible}
            autoCapitalize="none"
          />
          {inputType === 'password' && (
            <TouchableOpacity className="absolute right-4 top-1/2 -translate-y-1/2" onPress={() => setIsPasswordVisible((prev) => !prev)}>
              <Feather
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="#000000"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
);

export { Input };
