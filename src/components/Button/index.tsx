import { Container } from './styles'

type ButtonType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DANGER'
type ButtonSize = 'SMALL' | 'MEDIUM' | 'LARGE'

interface ButtonProps {
  type: ButtonType
  size?: ButtonSize
  onPress?: () => void
  hasIcon?: boolean
}

export function Button({ type = 'PRIMARY', size = 'MEDIUM', hasIcon = false, onPress }: ButtonProps) {
  return (
    <Container type={type} buttonSize={size} onPress={onPress} icon={hasIcon ? 'plus' : ''}>
      Salvar
    </Container>
  )
}