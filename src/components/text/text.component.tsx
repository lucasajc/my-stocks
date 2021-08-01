import React, { PropsWithChildren } from 'react'
import { TextProps, TextStyled } from 'components/text/text.styled'

export const Text = ({
  size = 'md',
  weight = 'normal',
  className,
  children,
}: PropsWithChildren<TextProps>) => {
  return (
    <TextStyled className={className} size={size} weight={weight}>
      {children}
    </TextStyled>
  )
}
