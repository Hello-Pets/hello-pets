import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { cn } from '../lib/utils';

// TODO: make controlled (optional)
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
}
function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  ...props
}: CheckboxProps) {
  const [isChecked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(prev => !prev)
  }

  return (
    <View
      className={cn('flex flex-row items-center gap-2', className)}
      {...props}
    >
      <TouchableOpacity onPress={toggleCheckbox}>
        <View
          className={cn(
            'w-4 h-4 border border-[#101828] rounded bg-background flex justify-center items-center',
            {
              'bg-[#101828]': isChecked,
            },
            checkboxClasses
          )}
        >
          {
            isChecked && <AntDesign name="check" size={12} color="#F5F5F5" />}
        </View>
      </TouchableOpacity>
      {label && (
        <Text className={cn('text-xs', labelClasses)}>{label}</Text>
      )}
    </View>
  );
}

export { Checkbox };
