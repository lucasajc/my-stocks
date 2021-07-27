import React from 'react'
import { Text } from 'components/text/text.component'
import { Number } from 'components/number/number.component'
import {
  CardLatestPriceStyled,
  CardQuoteSummaryGrid,
  CardQuoteSummaryGridCell,
  PriceDetails,
} from 'pages/company/card-latest-price/card-latest-price.styled'
import { Quote } from 'client-api/quote'
import { CardHeader, CardPrimaryContent } from 'components/card/card.component'

type Props = Pick<
  Quote,
  'latestPrice' | 'change' | 'changePercent' | 'high' | 'low'
>

export const CardLatestPrice = ({
  latestPrice,
  change,
  changePercent,
  high,
  low,
}: Props) => {
  return (
    <CardLatestPriceStyled>
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
          />
        </PriceDetails>
      </div>
      <CardQuoteSummaryGrid>
        <CardQuoteSummaryGridCell>
          <Text size="sm" weight="light">
            High:
          </Text>
        </CardQuoteSummaryGridCell>
        <CardQuoteSummaryGridCell>
          <Number value={high} size="sm" weight="normal" />
        </CardQuoteSummaryGridCell>
        <CardQuoteSummaryGridCell>
          <Text size="sm" weight="light">
            Low:
          </Text>
        </CardQuoteSummaryGridCell>
        <CardQuoteSummaryGridCell>
          <Number value={low} size="sm" weight="normal" />
        </CardQuoteSummaryGridCell>
      </CardQuoteSummaryGrid>
    </CardLatestPriceStyled>
  )
}
