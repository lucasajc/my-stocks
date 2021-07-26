import styled from 'styled-components'

export const NumberStyled = styled.span<{
  sign: 'positive' | 'negative' | 'zero'
}>`
  font-size: 14px;
  display: inline-block;
  color: ${(props) => props.theme.text.colors.numbers[props.sign]};
`
