import { Dimensions, FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'

import { OnboardingProps } from '@/shared/constants/onboarding'

interface BulletProps {
  active: boolean
}

interface FooterProps {
  isLastSlide: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`

export const OnboardingWrapper = styled(
  FlatList as new (props: FlatListProps<OnboardingProps>) => FlatList<OnboardingProps>,
)`
  max-height: 50%;
  height: auto;
`

export const ItemWrapper = styled.View`
  justify-content: center;
  width: ${Dimensions.get('window').width}px;
  padding: 0 24px;
`

export const OnboardingImage = styled.Image`
  width: 272px;
  margin: 0 auto;
`

export const TextAndSupportingText = styled.View`
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  line-height: 36px;
  text-align: center;
`

export const Description = styled.Text`
  font-size: 14px;
  color: #667085;
  line-height: 21px;
  text-align: center;
`

export const BulletWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Bullet = styled.View<BulletProps>`
  width: ${({ active }) => (active ? 24 : 6)}px;
  height: 6px;
  background-color: ${({ active }) => (active ? '#202832' : '#B8BABD')};
  border-radius: ${({ active }) => (active ? 7.56 : 16)}px;
`

export const Footer = styled.View<FooterProps>`
  position: absolute;
  bottom: 24px;
  flex-direction: ${({ isLastSlide }) => (isLastSlide ? 'column' : 'row')};
  gap: 8px;
  ${({ isLastSlide }) => !isLastSlide && 'align-items: center;'}
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
`
