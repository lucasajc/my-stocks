import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CompanyService } from 'client-api/company'
import Company from 'client-api/company/company.model'
import { Quote, QuoteService } from 'client-api/quote'
import { Text } from 'components/text/text.component'
import { SearchBox } from 'components/search-box/search-box.component'
import { Loading } from 'components/loading/loading.component'
import {
  Button,
  Container,
  ContainerNotFound,
  Header,
  Title,
} from './company.page.styled'
import { CompanySummary } from './summary/company-summary.component'

type RequestStatus = 'loading' | 'success' | 'error' | 'idle'

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>()
  const history = useHistory()
  const [company, setCompany] = useState<Company>()
  const [quote, setQuote] = useState<Quote>()
  const [getCompanyStatus, setGetCompanyStatus] =
    useState<RequestStatus>('idle')
  const [getQuoteStatus, setGetQuoteStatus] = useState<RequestStatus>('idle')

  const onSearch = (symbolToSearch: string) => {
    history.push(`/company/${symbolToSearch}`)
  }

  useEffect(() => {
    setGetCompanyStatus('loading')
    setGetQuoteStatus('loading')
    CompanyService.getCompany(symbol).then(async (response) => {
      setGetCompanyStatus(response.error ? 'error' : 'success')
      setCompany(response.data)
    })
    QuoteService.getQuote(symbol).then(async (response) => {
      setGetQuoteStatus(response.error ? 'error' : 'success')
      setQuote(response.data)
    })
  }, [symbol])

  return (
    <>
      <Container>
        <SearchBox onSearch={onSearch} placeholder="Search for a company..." />
        {company &&
          quote &&
          getCompanyStatus === 'success' &&
          getQuoteStatus === 'success' && (
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
        <ContainerNotFound>
          {(getCompanyStatus === 'error' || getQuoteStatus === 'error') && (
            <>
              <Text weight="light" size="xxlg">
                <span>
                  {
                    'Sorry, we could not find any company with the given symbol '
                  }
                </span>
                <strong>{`"${symbol}"`}</strong>
              </Text>
              <Text weight="light" size="sm">
                <p>
                  Try searching for another symbol, such as IBM, AAPL, MSFT.
                </p>
              </Text>
            </>
          )}
        </ContainerNotFound>
        <Button variant="secondary" onClick={history.goBack}>
          Go back
        </Button>
      </Container>
      {(getCompanyStatus === 'loading' || getQuoteStatus === 'loading') && (
        <Loading />
      )}
    </>
  )
}

export default CompanyPage
