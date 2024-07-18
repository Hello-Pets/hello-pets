import { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { cn } from '../lib/utils';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: object;
  checkboxClasses?: object;
}

function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  ...props
}: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(prev => !prev);
  };

  return (
    <View style={[styles.container, className]} {...props}>
      <TouchableOpacity onPress={toggleCheckbox}>
        <View style={[styles.checkbox, isChecked && styles.checked, checkboxClasses]}>
          {isChecked && <AntDesign name="check" size={12} color="#F5F5F5" />}
        </View>
      </TouchableOpacity>
      {label && (
        <Text style={[styles.label, labelClasses]}>{label}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#E0E5F2',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#101828',
  },
  label: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
});

export { Checkbox };
