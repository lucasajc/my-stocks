import React, { useMemo } from 'react'
import { TextProps } from 'components/text/text.styled'
import { NumberStyled } from './number.styled'

interface IProps extends TextProps {
  value?: number
  percentage?: boolean
  showPositiveSign?: boolean
  withColors?: boolean
  wrappedByParenthesis?: boolean
}

const signMap = {
  positive: '+',
  negative: '',
  zero: '',
}

export const Number = ({
  value = 0,
  percentage = false,
  size = 'md',
  weight = 'normal',
  showPositiveSign = false,
  withColors = false,
  wrappedByParenthesis = false,
}: IProps) => {
  const sign = useMemo(() => {
    let signName = 'zero'
    if (value > 0) signName = 'positive'
    else if (value < 0) signName = 'negative'
    return signName as 'positive' | 'negative' | 'zero'
  }, [value])
  const formattedValue = value ? value.toFixed(2) : '0.00'
  const percentageSign = percentage ? '%' : ''
  const signValue = showPositiveSign ? signMap[sign] : ''
  const output = `${signValue}${formattedValue}${percentageSign}`

  return (
    <NumberStyled
      sign={sign}
      size={size}
      weight={weight}
      withColors={withColors}
    >
      {wrappedByParenthesis ? `(${output})` : output}
    </NumberStyled>
  )
}
