import React, { HTMLProps, PropsWithChildren } from 'react'
import { Button as ButtonStyled } from './button.styled'

interface IProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  length?: 'sm' | 'lg'
}

export const Button = ({
  variant,
  length,
  onClick,
  children,
}: PropsWithChildren<IProps>) => {
  return (
    <ButtonStyled
      type="button"
      variant={variant}
      length={length}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}