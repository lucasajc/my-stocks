import React, { HTMLProps, PropsWithChildren } from 'react'
import { Button as ButtonStyled } from './button.styled'

interface IProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  length?: 'sm' | 'lg'
}

export const Button = (props: PropsWithChildren<IProps>) => {
  return (
    <ButtonStyled
      type="button"
      variant={props.variant}
      length={props.length}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonStyled>
  )
}
