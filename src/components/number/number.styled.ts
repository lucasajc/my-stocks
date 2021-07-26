import styled from 'styled-components'
import { TextProps, TextStyled } from 'components/text/text.styled'

interface NumberProps extends TextProps {
  sign: 'positive' | 'negative' | 'zero'
}

export const NumberStyled = styled(TextStyled)<NumberProps>`
  font-size: 14px;
  display: inline-block;
  color: ${(props) => props.theme.text.colors.numbers[props.sign]};
`
