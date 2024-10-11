import * as S from './styles'

export function SignIn() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Olá! Que bom ver você de novo!</S.Title>
        <S.Subtitle>Entre na sua conta</S.Subtitle>
      </S.Header>

      <S.Form>
        <S.InputWrapper>
          <S.InputLabel>E-mail</S.InputLabel>
          <S.Input placeholder="Digite seu e-mail" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>Senha</S.InputLabel>
          <S.Input placeholder="Digite sua senha" />
        </S.InputWrapper>

        <S.ActionsButtons>
          <S.RadioButtonWrapper>
            <S.RadioButton />
            <S.RadioButtonLabel>Lembrar de mim</S.RadioButtonLabel>
          </S.RadioButtonWrapper>

          <S.ForgotPassword>Esqueceu a senha?</S.ForgotPassword>
        </S.ActionsButtons>
      </S.Form>

      <S.SubmitButton>
        <S.SubmitButtonText>
          Entrar
        </S.SubmitButtonText>
      </S.SubmitButton>

      <S.DividerWrapper>
        <S.Divider />
        <S.DividerText>Ou entre com</S.DividerText>
        <S.Divider />
      </S.DividerWrapper>

      <S.SocialButtonsWrapper>
        <S.SocialButton>
          <S.SocialButtonText>Entre com Google</S.SocialButtonText>
        </S.SocialButton>
        <S.SocialButton>
          <S.SocialButtonText>Entre com Facebook</S.SocialButtonText>
        </S.SocialButton>
      </S.SocialButtonsWrapper>

      <S.Footer>
        <S.SignUp>
          Não tem uma conta? <S.SignUpLink>Cadastre-se</S.SignUpLink>
        </S.SignUp>
      </S.Footer>
    </S.Container>
  )
}