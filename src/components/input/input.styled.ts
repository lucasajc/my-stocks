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
  font-size: 12px;
  transition: box-shadow 0.2s ease-in;
  font-family: ${(props) => props.theme.text.font};
  background-color: ${(props) =>
    props.theme.input[props.variant].default.backgroundColor};
  border-color: ${(props) =>
    props.theme.input[props.variant].default.borderColor};
  &:focus {
    box-shadow: inset 0 0 0 1px
      ${(props) => props.theme.input[props.variant].default.borderColor};
  }

  @media only screen and (min-width: 360px) {
    font-size: 14px;
  }
`
