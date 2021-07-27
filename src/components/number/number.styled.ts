import styled from 'styled-components'
import { TextProps, TextStyled } from 'components/text/text.styled'

interface NumberProps extends TextProps {
  sign: 'positive' | 'negative' | 'zero'
  withColors: boolean
}

export const NumberStyled = styled(TextStyled)<NumberProps>`
  font-size: 14px;
  display: inline-block;
  color: ${(props) =>
    props.withColors
      ? props.theme.text.colors.numbers[props.sign]
      : props.theme.text.colors.labels.default};
`
