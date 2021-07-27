import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyService } from 'client-api/company'
import Company from 'client-api/company/company.model'
import { Quote, QuoteService } from 'client-api/quote'
import { Number } from 'components/number/number.component'
import { Text } from 'components/text/text.component'
import { Card } from 'components/card/card.component'
import {
  Header,
  CardContainer,
  CardHeader,
  CardQuoteSummary,
  CardQuoteSummaryGrid,
  CardQuoteSummaryGridCell,
  Container,
  Price,
  PriceDetails,
  Title,
} from 'pages/company/company.page.styled'

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>()
  const [company, setCompany] = useState<Company>()
  const [quote, setQuote] = useState<Quote>()
  const [getCompanyError, setGetCompanyError] = useState<boolean>()
  const [getQuoteError, setGetQuoteError] = useState<boolean>()

  useEffect(() => {
    CompanyService.getCompany(symbol).then(async (response) => {
      setGetCompanyError(!!response.error)
      setCompany(response.data)
    })
    QuoteService.getQuote(symbol).then(async (response) => {
      setGetQuoteError(!!response.error)
      setQuote(response.data)
    })
  }, [symbol])

  return (
    <Container>
      {company && quote && (
        <>
          <Header>
            <Title>
              <Text size="xxlg" weight="bold">
                {company.companyName}
              </Text>
              <span> </span>
              <Text size="xxlg" weight="light">
                {company.symbol}
              </Text>
            </Title>
            <Text size="sm" weight="light">
              {quote.primaryExchange}
            </Text>
          </Header>
          <CardContainer>
            <CardQuoteSummary>
              <div>
                <CardHeader>
                  <Text size="md" weight="light">
                    Latest price
                  </Text>
                </CardHeader>
                <Price>{quote.latestPrice.toFixed(2)}</Price>
                <PriceDetails>
                  <Number value={quote.change} showPositiveSign withColors />
                  <Number
                    value={quote.changePercent}
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
                  <Number value={quote.high} size="sm" weight="normal" />
                </CardQuoteSummaryGridCell>
                <CardQuoteSummaryGridCell>
                  <Text size="sm" weight="light">
                    Low:
                  </Text>
                </CardQuoteSummaryGridCell>
                <CardQuoteSummaryGridCell>
                  <Number value={quote.low} size="sm" weight="normal" />
                </CardQuoteSummaryGridCell>
              </CardQuoteSummaryGrid>
            </CardQuoteSummary>
            <Card>
              <CardHeader>
                <Text size="md" weight="light">
                  Volume
                </Text>
              </CardHeader>
              <Price>{quote.latestVolume || quote.previousVolume}</Price>
            </Card>
          </CardContainer>
        </>
      )}
      {(getCompanyError || getQuoteError) && (
        <span>{`We could not find any company with the symbol ${symbol}`}</span>
      )}
    </Container>
  )
}

export default CompanyPage
