import React, { PropsWithChildren } from 'react'
import { TextProps, TextStyled } from 'components/text/text.styled'

export const Text = ({
  size = 'md',
  weight = 'normal',
  children,
}: PropsWithChildren<TextProps>) => {
  return (
    <TextStyled size={size} weight={weight}>
      {children}
    </TextStyled>
  )
}
