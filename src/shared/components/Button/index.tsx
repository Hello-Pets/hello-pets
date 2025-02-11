import { ButtonProps as ButtonPropsPaper } from 'react-native-paper'

import { ButtonSize, ButtonType, Container } from './styles'

interface ButtonProps extends ButtonPropsPaper {
  title: string
  type: ButtonType
  size?: ButtonSize
  onPress?: () => void
  icon?: string
  leadingIcon?: boolean
  trailingIcon?: boolean
  disabled?: boolean
}

export function Button({ title, type = 'PRIMARY', size = 'MEDIUM', icon, leadingIcon, trailingIcon, onPress, disabled }: ButtonProps) {
  return (
    <Container
      type={type}
      buttonSize={size}
      onPress={onPress}
      icon={{
        source: icon,
        direction: 'auto',
        width: 24,
      }}
      disabled={disabled}
      contentStyle={{ flexDirection: trailingIcon ? 'row-reverse' : leadingIcon ? 'row' : 'row' }}
    >
      {title}
    </Container>
  )
}