import { Button } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 56px 24px 40px;
  justify-content: center;
`

export const Header = styled.View`
  gap: 8px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  line-height: 31.2px;
  font-weight: 700;
  font-size: 24px;
  color: #1E232C;
`

export const Subtitle = styled.Text`
  line-height: 20.8px;
  font-weight: 500;
  font-size: 16px;
  color: #606060;
`

export const Form = styled.View`
  margin-bottom: 49px;
  gap: 16px;
`

export const InputWrapper = styled.View`
  gap: 6px;
`

export const InputLabel = styled.Text`
  color: #000000;
  line-height: 17.5px;
  font-size: 14px;
`

export const Input = styled.TextInput`
  color: #838BA1;
  line-height: 17.5px;
  font-size: 14px;
  border: 1px solid #D8DADC;
  border-radius: 10px;

  padding: 18px 16px;
`

export const ActionsButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const RadioButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const RadioButtonLabel = styled.Text`
  font-size: 12px;
  color: #000000;
  line-height: 15px;
`

export const RadioButton = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: #D8DADC;
`

export const ForgotPassword = styled.Text`
  font-size: 12px;
  color: #000000;
  line-height: 15px;
`

export const SubmitButton = styled.TouchableOpacity`
  background-color: #202832;
  border-radius: 8px;
  padding: 14px 0;

  align-items: center;
`

export const SubmitButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
`

export const DividerWrapper = styled.View`
  margin: 40px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Divider = styled.View`
  flex: 1;
  height: 1px;
  background-color: #E8ECF4;
`

export const DividerText = styled.Text`
  font-size: 12px;
  color: #6A707C;
  line-height: 15px;
`

export const SocialButtonsWrapper = styled.View`
  gap: 8px;
`

export const SocialButton = styled.TouchableOpacity`
  padding: 12px 0;
  border: 1px solid #E8E8E8;
  border-radius: 8px;

  align-items: center;
`

export const SocialButtonText = styled.Text`
  font-size: 12px;
  color: #121212;
  line-height: 24px;
`

export const Footer = styled.View`
  margin-top: 64px;
  align-items: center;
  gap: 8px;
`

export const SignUp = styled.Text`
  font-size: 14px;
  color: #000000;
  line-height: 17.5px;
`

export const SignUpLink = styled.Text`
  font-size: 14px;
  color: #000000;
  line-height: 17.5px;
  font-weight: 600;
`
