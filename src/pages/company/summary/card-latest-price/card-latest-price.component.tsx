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

type Props = Pick<
  Quote,
  | 'latestPrice'
  | 'change'
  | 'changePercent'
  | 'high'
  | 'low'
  | 'iexOpen'
  | 'iexClose'
>

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
        <CardPrimaryContent>{latestPrice.toFixed(2)}</CardPrimaryContent>
        <PriceDetails>
          <Number value={change} showPositiveSign withColors />
          <Number
            value={changePercent}
            percentage
            showPositiveSign
            withColors
            wrappedByParenthesis
          />
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
