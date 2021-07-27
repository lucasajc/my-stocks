import React, { useMemo } from 'react'
import { TextProps } from 'components/text/text.styled'
import { NumberStyled } from './number.styled'

interface IProps extends TextProps {
  value?: number
  percentage?: boolean
  showPositiveSign?: boolean
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
}: IProps) => {
  const sign = useMemo(() => {
    let signName = 'zero'
    if (value > 0) signName = 'positive'
    else if (value < 0) signName = 'negative'
    return signName as 'positive' | 'negative' | 'zero'
  }, [value])
  const formattedValue = value ? value.toFixed(2) : '0.00'
  const percentageSign = percentage ? '%' : ''

  return (
    <NumberStyled sign={sign} size={size} weight={weight}>
      {`${
        showPositiveSign ? signMap[sign] : ''
      }${formattedValue}${percentageSign}`}
    </NumberStyled>
  )
}
