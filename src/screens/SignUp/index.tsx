import * as S from './styles'

export function SignUp() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Criar uma conta</S.Title>
      </S.Header>

      <S.Form>
        <S.InputWrapper>
          <S.InputLabel>Nome</S.InputLabel>
          <S.Input placeholder="Digite seu nome" />
        </S.InputWrapper>
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
            <S.RadioButtonLabel>Eu aceito os <S.RadioButtonLabelLink>termos e politica de privacidade</S.RadioButtonLabelLink></S.RadioButtonLabel>
          </S.RadioButtonWrapper>
        </S.ActionsButtons>
      </S.Form>

      <S.SubmitButton>
        <S.SubmitButtonText>
          Entrar
        </S.SubmitButtonText>
      </S.SubmitButton>

      <S.DividerWrapper>
        <S.Divider />
        <S.DividerText>Ou cadastre com</S.DividerText>
        <S.Divider />
      </S.DividerWrapper>

      <S.SocialButtonsWrapper>
        <S.SocialButton>
          <S.SocialButtonText>Cadastre com Google</S.SocialButtonText>
        </S.SocialButton>
        <S.SocialButton>
          <S.SocialButtonText>Cadastre com Facebook</S.SocialButtonText>
        </S.SocialButton>
      </S.SocialButtonsWrapper>

      <S.Footer>
        <S.SignIn>
          Já possui uma conta? <S.SignInLink>Entre</S.SignInLink>
        </S.SignIn>
      </S.Footer>
    </S.Container>
  )
}