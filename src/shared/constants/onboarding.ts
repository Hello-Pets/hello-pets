
export interface OnboardingProps {
  id: number;
  title: string;
  description: string;
}

export const items: OnboardingProps[] = [
  {
    id: 1,
    title: 'Que bom ter você aqui conosco!',
    description: 'Vamos amar acompanhar você e o seu pet nessa jornada. Descubra novas informações, tutores e muito mais!',
  },
  {
    id: 2,
    title: 'Abraçamos as diversidades',
    description: 'Acolhemos tutores de todos os tipos de pets, pois sabemos que não existe restrições para o amor e cuidado.',
  },
  {
    id: 3,
    title: 'Crie laços com outros tutores',
    description: 'Cuidar de um pet é uma aventura, então conte com a nossa comunidade para tirar dúvidas e pedir conselhos.',
  },
  {
    id: 4,
    title: 'Receba recomendações especiais para você',
    description: 'Vamos sempre te atualizar de eventos, clínicas e espaços pet-friendly na sua região.',
  },
  {
    id: 5,
    title: 'Boas vindas!',
    description: 'Entre ou crie uma nova conta caso essa seja a sua primeira vez na plataforma.',
  },
];