import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CompanyService } from 'client-api/company'
import Company from 'client-api/company/company.model'
import { Quote, QuoteService } from 'client-api/quote'
import { Text } from 'components/text/text.component'
import { SearchBox } from 'components/search-box/search-box.component'
import { Container, Header, Title } from './company.page.styled'
import { CompanySummary } from './summary/company-summary.component'

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>()
  const history = useHistory()
  const [company, setCompany] = useState<Company>()
  const [quote, setQuote] = useState<Quote>()
  const [getCompanyError, setGetCompanyError] = useState<boolean>()
  const [getQuoteError, setGetQuoteError] = useState<boolean>()

  const onSearch = (symbolToSearch: string) => {
    history.push(`/company/${symbolToSearch}`)
  }

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
      <SearchBox onSearch={onSearch} placeholder="Search for a company..." />
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
          <CompanySummary company={company} quote={quote} />
        </>
      )}
      {(getCompanyError || getQuoteError) && (
        <span>{`We could not find any company with the symbol ${symbol}`}</span>
      )}
    </Container>
  )
}

export default CompanyPage
