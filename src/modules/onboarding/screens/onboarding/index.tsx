import { useRef, useState } from 'react'
import { FlatList, ViewToken } from 'react-native';

import { items } from '@/shared/constants/onboarding';

import { Button } from '@/shared/components/Button';

import * as S from './styles'

interface ChangeSlideProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function Onboarding() {
  const [slideIndex, setSlideIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)

  const indexChanged = useRef(({ viewableItems }: ChangeSlideProps) => {
    const index = viewableItems[0].index!;

    setSlideIndex(index)
  })

  function handleNextSlide() {
    return slideIndex < items.length - 1 ? flatListRef.current?.scrollToIndex({ index: slideIndex + 1 }) : null
  }

  function handleSkip() {
    flatListRef.current?.scrollToIndex({ index: items.length - 1 })
  }

  return (
    <S.Container>
      <S.OnboardingWrapper
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <S.ItemWrapper>
            <S.OnboardingImage source={require('@/shared/assets/onboarding-image.png')} />
            <S.TextAndSupportingText>
              <S.Title>{item.title}</S.Title>
              <S.Description>{item.description}</S.Description>
            </S.TextAndSupportingText>
          </S.ItemWrapper>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />

      <S.BulletWrapper>
        {
          items.map((_, index) => (
            <S.Bullet active={index === slideIndex} key={index} />
          ))
        }
      </S.BulletWrapper>

      <S.Footer isLastSlide={slideIndex === items.length - 1}>
        {slideIndex < items.length - 1 ? (
          <>
            <Button
              title="Pular"
              type="TERTIARY"
              size="MEDIUM"
              onPress={handleSkip}
            >
              Pular
            </Button>
            <Button
              title="Continuar"
              type="PRIMARY"
              size="MEDIUM"
              onPress={handleNextSlide}
              icon="arrow-right"
              trailingIcon
            >
              {slideIndex === items.length - 1 ? 'Continuar' : 'Próximo'}
            </Button>
          </>

        ) : (
          <>
            <Button
              title="Criar conta"
              type="SECONDARY"
              size="MEDIUM"
              onPress={handleSkip}
            >
              Pular
            </Button>
            <Button
              title="Entrar"
              type="PRIMARY"
              size="MEDIUM"
            >
              Entrar
            </Button>
          </>
        )}
      </S.Footer>
    </S.Container>
  )
}