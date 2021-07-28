import styled from 'styled-components'

interface ButtonProps {
  variant?: string
  length?: string
}

export const Button = styled.button<ButtonProps>`
  border: 1px solid;
  border-radius: 32px;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  transition: background-color 0.1s ease-in, border-color 0.1s ease-in;
  padding: ${(props) => (props.length === 'sm' ? '12px' : '12px 32px')};
  background-color: ${(props) =>
    props.theme.button[props.variant].default.backgroundColor};
  color: ${(props) => props.theme.button[props.variant].default.textColor};
  border-color: ${(props) =>
    props.theme.button[props.variant].default.borderColor};
  &:hover {
    background-color: ${(props) =>
      props.theme.button[props.variant].hover.backgroundColor};
    color: ${(props) => props.theme.button[props.variant].hover.textColor};
    border: 1px solid
      ${(props) => props.theme.button[props.variant].hover.borderColor};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.theme.button[props.variant].disabled.backgroundColor};
    border-color: ${(props) =>
      props.theme.button[props.variant].disabled.borderColor};
  }
`
