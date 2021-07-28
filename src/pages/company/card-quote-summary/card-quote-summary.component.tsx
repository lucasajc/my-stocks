import React from 'react'
import { Quote } from 'client-api/quote'
import { Text } from 'components/text/text.component'
import { Card } from 'components/card/card.component'
import { Number } from 'components/number/number.component'
import { Cell, Grid } from '../grid/grid.styled'

type Props = Pick<
  Partial<Quote>,
  | 'week52High'
  | 'week52Low'
  | 'iexAskPrice'
  | 'iexAskSize'
  | 'iexBidPrice'
  | 'iexBidSize'
  | 'peRatio'
  | 'marketCap'
>

export const CardQuoteSummary = ({
  iexAskPrice,
  iexAskSize,
  iexBidPrice,
  iexBidSize,
  marketCap,
  peRatio,
  week52High,
  week52Low,
}: Props) => {
  return (
    <Card>
      <Grid>
        <Cell>
          <Text size="sm" weight="light">
            Bid:
          </Text>
        </Cell>
        <Cell>
          <Text size="sm" weight="normal">
            <Number value={iexBidPrice} size="sm" />
            <span> x </span>
            <span>{iexBidSize}</span>
          </Text>
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            Ask:
          </Text>
        </Cell>
        <Cell>
          <Text size="sm" weight="normal">
            <Number value={iexAskPrice} size="sm" />
            <span> x </span>
            <span>{iexAskSize}</span>
          </Text>
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            52 week range:
          </Text>
        </Cell>
        <Cell>
          <Text size="sm" weight="normal">
            <Number value={week52Low} size="sm" />
            <span> - </span>
            <Number value={week52High} size="sm" />
          </Text>
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            Market cap:
          </Text>
        </Cell>
        <Cell>
          <span>
            <Number
              value={marketCap ? marketCap / 1000000000 : 0}
              size="sm"
              weight="normal"
            />
            <Text size="sm" weight="normal">
              B
            </Text>
          </span>
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            PE Ratio:
          </Text>
        </Cell>
        <Cell>
          <Number value={peRatio} size="sm" weight="normal" />
        </Cell>
      </Grid>
    </Card>
  )
}
