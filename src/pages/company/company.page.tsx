import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyService } from 'client-api/company'
import Company from 'client-api/company/company.model'
import { Quote, QuoteService } from 'client-api/quote'
import { Text } from 'components/text/text.component'
import {
  CardContainer,
  Container,
  Header,
  Title,
} from 'pages/company/company.page.styled'
import { CardLatestPrice } from 'pages/company/card-latest-price/card-latest-price.component'
import { CardVolume } from 'pages/company/card-volume/card-volume.component'

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
            />
            <CardVolume
              previousVolume={quote.previousVolume}
              latestVolume={quote.latestVolume}
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
