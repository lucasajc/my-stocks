import React, { PropsWithChildren } from 'react'
import { Quote } from 'client-api/quote'
import { Text } from 'components/text/text.component'
import { Card } from 'components/card/card.component'
import { Number } from 'components/number/number.component'
import { Cell, Grid } from '../grid/grid.styled'

type Props = Pick<
  Quote,
  | 'week52High'
  | 'week52Low'
  | 'iexAskPrice'
  | 'iexAskSize'
  | 'iexBidPrice'
  | 'iexBidSize'
  | 'peRatio'
  | 'marketCap'
>

const isNumber = (value: number) => {
  return typeof value === 'number'
}

const SummaryField = ({
  isFieldAvailable,
  children,
}: PropsWithChildren<{
  isFieldAvailable: boolean
}>) => {
  return (
    <Text size="sm" weight="normal">
      {isFieldAvailable ? <>{children}</> : <span>N/A</span>}
    </Text>
  )
}

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
          <SummaryField
            isFieldAvailable={isNumber(iexBidPrice) && isNumber(iexBidSize)}
          >
            <Number value={iexBidPrice} size="sm" />
            <span> x </span>
            <span>{iexBidSize}</span>
          </SummaryField>
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            Ask:
          </Text>
        </Cell>
        <Cell>
          <SummaryField
            isFieldAvailable={isNumber(iexAskPrice) && isNumber(iexAskSize)}
          >
            <Number value={iexAskPrice} size="sm" />
            <span> x </span>
            <span>{iexAskSize}</span>
          </SummaryField>
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            52 week range:
          </Text>
        </Cell>
        <Cell>
          <SummaryField
            isFieldAvailable={isNumber(week52Low) && isNumber(week52High)}
          >
            <Number value={week52Low} size="sm" />
            <span> - </span>
            <Number value={week52High} size="sm" />
          </SummaryField>
        </Cell>
        <Cell>
          <Text size="sm" weight="light">
            Market cap:
          </Text>
        </Cell>
        <Cell>
          <SummaryField isFieldAvailable={isNumber(marketCap)}>
            <Number value={marketCap / 1000000000} size="sm" weight="normal" />
            <span>B</span>
          </SummaryField>
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
