import styled from 'styled-components'

interface InputProps {
  variant?: 'primary' | 'secondary'
}

export const Input = styled.input<InputProps>`
  outline: none;
  border-style: hidden;
  padding: 12px 16px;
  border: 1px solid;
  border-radius: 32px;
  height: 24px;
  background-color: ${(props) =>
    props.theme.input[props.variant].default.backgroundColor};
  border-color: ${(props) =>
    props.theme.input[props.variant].default.borderColor};
`
