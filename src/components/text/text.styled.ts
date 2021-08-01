import styled from 'styled-components'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg'
  weight?: 'light' | 'normal' | 'bold'
  className?: string
}

export const TextStyled = styled.span<TextProps>`
  display: inline-block;
  font-weight: ${(props) => props.theme.text.weights[props.weight]};
  font-size: ${(props) => props.theme.text.sizes[props.size]};
`
