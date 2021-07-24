import React, { ChangeEvent, HTMLProps, PropsWithChildren } from 'react'
import { Input as InputStyled } from './input.styled'

interface IProps extends HTMLProps<HTMLInputElement> {
  variant?: 'primary' | 'secondary'
  onChange?(e: ChangeEvent<HTMLInputElement>): void
}

export const Input = ({
  variant,
  placeholder,
  onChange,
  children,
}: PropsWithChildren<IProps>) => {
  return (
    <InputStyled
      onChange={onChange}
      placeholder={placeholder}
      variant={variant || 'primary'}
    >
      {children}
    </InputStyled>
  )
}
