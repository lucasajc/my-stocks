import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyService } from 'client-api/company'
import Company from 'client-api/company/company.model'
import { Quote, QuoteService } from 'client-api/quote'
import { Text } from 'components/text/text.component'
import { CardContainer, Container, Header, Title } from './company.page.styled'
import { CardLatestPrice } from './card-latest-price/card-latest-price.component'
import { CardVolume } from './card-volume/card-volume.component'
import { CardQuoteSummary } from './card-quote-summary/card-quote-summary.component'

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
                {`(${company.symbol})`}
              </Text>
            </Title>
            <Text size="sm" weight="light">
              {quote.primaryExchange}
            </Text>
          </Header>
          <CardContainer>
            <CardLatestPrice
              change={quote.change}
              changePercent={quote.changePercent}
              high={quote.high}
              low={quote.low}
              latestPrice={quote.latestPrice}
              iexOpen={quote.iexOpen}
              iexClose={quote.iexClose}
            />
            <CardVolume
              previousVolume={quote.previousVolume}
              latestVolume={quote.latestVolume}
              avgTotalVolume={quote.avgTotalVolume}
            />
            <CardQuoteSummary
              iexAskPrice={quote.iexAskPrice}
              iexAskSize={quote.iexAskSize}
              iexBidPrice={quote.iexBidPrice}
              iexBidSize={quote.iexBidSize}
              marketCap={quote.marketCap}
              peRatio={quote.peRatio}
              week52High={quote.week52High}
              week52Low={quote.week52Low}
            />
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
