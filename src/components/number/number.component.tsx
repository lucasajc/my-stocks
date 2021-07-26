import React, { useMemo } from 'react'
import { TextProps } from 'components/text/text.styled'
import { NumberStyled } from './number.styled'

interface IProps extends TextProps {
  value?: number
  percentage?: boolean
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
}: IProps) => {
  const sign = useMemo(() => {
    let signName = 'zero'
    if (value > 0) signName = 'positive'
    else if (value < 0) signName = 'negative'
    return signName as 'positive' | 'negative' | 'zero'
  }, [value])
  const formattedValue = value.toFixed(2)
  const percentageSign = percentage ? '%' : ''

  return (
    <NumberStyled sign={sign} size={size} weight={weight}>
      {`${signMap[sign]}${formattedValue}${percentageSign}`}
    </NumberStyled>
  )
}
