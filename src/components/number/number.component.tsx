import React, { useMemo } from 'react'
import { TextProps } from 'components/text/text.styled'
import { NumberStyled } from './number.styled'

interface IProps extends TextProps {
  value?: number
  percentage?: boolean
  showPositiveSign?: boolean
  withColors?: boolean
  wrappedByParenthesis?: boolean
  className?: string
}

const signMap = {
  positive: '+',
  negative: '',
  zero: '',
}

export const Number = ({
  value,
  percentage = false,
  size = 'md',
  weight = 'normal',
  showPositiveSign = false,
  withColors = false,
  wrappedByParenthesis = false,
  className,
}: IProps) => {
  const sign = useMemo(() => {
    let signName = 'zero'
    if (value > 0) signName = 'positive'
    else if (value < 0) signName = 'negative'
    return signName as 'positive' | 'negative' | 'zero'
  }, [value])

  const output = useMemo(() => {
    if (value === null || value === undefined) {
      return 'N/A'
    }
    const percentageSign = percentage ? '%' : ''
    const signValue = showPositiveSign ? signMap[sign] : ''
    return `${signValue}${value.toFixed(2)}${percentageSign}`
  }, [value, sign, percentage, showPositiveSign])

  return (
    <NumberStyled
      sign={sign}
      size={size}
      weight={weight}
      withColors={withColors}
      className={className}
    >
      {wrappedByParenthesis ? `(${output})` : output}
    </NumberStyled>
  )
}
