import { Button as RNPaperButton, Icon as RNPaperIcon } from "react-native-paper";
import styled from "styled-components/native";

import { theme } from "@/styles/theme";

type ButtonType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DANGER'
type ButtonSize = 'SMALL' | 'MEDIUM' | 'LARGE'

interface ButtonProps {
  type?: ButtonType
  buttonSize?: ButtonSize
}

const { colors } = theme

export const Container = styled(RNPaperButton).attrs<ButtonProps>(({ type }) => ({
  textColor:
    type === 'PRIMARY' ? colors.white500 :
      type === 'DANGER' ? colors.negative100 :
        colors.primary100,
  rippleColor:
    type === 'PRIMARY' ? colors.primary500 :
      type === 'DANGER' ? colors.negative400 :
        colors.neutral800,
}))`
  background-color: ${({ type }) =>
    type === 'PRIMARY' ? colors.primary100 :
      type === 'SECONDARY' ? colors.white500 :
        type === 'DANGER' ? colors.white400 :
          'transparent'
  };

border: 2px solid
    ${({ type }) =>
    type === 'SECONDARY' ? colors.primary100 :
      type === 'DANGER' ? colors.negative100 :
        'transparent'};
  border-color: ${({ type }) =>
    type === 'SECONDARY' ? colors.primary100 :
      type === 'DANGER' ? colors.negative100 :
        'transparent'
  };
  border-radius: 8px;

  font-size: ${({ buttonSize }) =>
    buttonSize === 'SMALL' ? '12px' :
      buttonSize === 'MEDIUM' ? '14px' :
        '16px'
  };
  line-height: ${({ buttonSize }) =>
    buttonSize === 'LARGE' ? '24px' :
      '20px'
  };
  
  font-weight: 600;
`
