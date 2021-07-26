import React, { useMemo } from 'react'
import { NumberStyled } from './number.styled'

interface IProps {
  value?: number
  percentage?: boolean
}

const signMap = {
  positive: '+',
  negative: '',
  zero: '',
}

export const Number = ({ value = 0, percentage = false }: IProps) => {
  const sign = useMemo(() => {
    let signName = 'zero'
    if (value > 0) signName = 'positive'
    else if (value < 0) signName = 'negative'
    return signName as 'positive' | 'negative' | 'zero'
  }, [value])
  const formattedValue = value.toFixed(2)
  const percentageSign = percentage ? '%' : ''

  return (
    <NumberStyled sign={sign}>
      {`${signMap[sign]}${formattedValue}${percentageSign}`}
    </NumberStyled>
  )
}
