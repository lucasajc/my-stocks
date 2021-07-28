import React from 'react'
import { Text } from 'components/text/text.component'
import { Number } from 'components/number/number.component'
import {
  CardLatestPriceGrid,
  CardLatestPrice as Card,
  PriceDetails,
} from 'pages/company/summary/card-latest-price/card-latest-price.styled'
import { Quote } from 'client-api/quote'
import { CardHeader, CardPrimaryContent } from 'components/card/card.component'
import { Cell } from '../grid/grid.styled'

type Props = Partial<
  Pick<
    Quote,
    | 'latestPrice'
    | 'change'
    | 'changePercent'
    | 'high'
    | 'low'
    | 'iexOpen'
    | 'iexClose'
  >
>

const isNumber = (value: number) => {
  return typeof value === 'number'
}

export const CardLatestPrice = ({
  latestPrice,
  change,
  changePercent,
  high,
  low,
  iexOpen,
  iexClose,
}: Props) => {
  return (
    <Card>
      <div>
        <CardHeader>
          <Text size="md" weight="light">
            Latest price
          </Text>
        </CardHeader>
        <CardPrimaryContent>
          {latestPrice ? latestPrice.toFixed(2) : 'N/A'}
        </CardPrimaryContent>
        <PriceDetails>
          {isNumber(change) && (
            <Number value={change} showPositiveSign withColors />
          )}
          {isNumber(changePercent) && (
            <Number
              value={changePercent}
              percentage
              showPositiveSign
              withColors
              wrappedByParenthesis
            />
          )}
        </PriceDetails>
      </div>
      <CardLatestPriceGrid>
        <Cell>
          <Text size="sm" weight="light">
            High:
          </Text>
        </Cell>
        <Cell>
          <Number value={high} size="sm" weight="normal" />
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            Low:
          </Text>
        </Cell>
        <Cell>
          <Number value={low} size="sm" weight="normal" />
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            Open:
          </Text>
        </Cell>
        <Cell>
          <Number value={iexOpen} size="sm" weight="normal" />
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            Close:
          </Text>
        </Cell>
        <Cell>
          <Number value={iexClose} size="sm" weight="normal" />
        </Cell>
      </CardLatestPriceGrid>
    </Card>
  )
}
