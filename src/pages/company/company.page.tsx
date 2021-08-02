import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Quote, QuoteService } from 'client-api/quote'
import { useCompany, useRequest } from 'common/hooks'
import { Layout } from 'components/layout/layout.component'
import { Loading } from 'components/loading/loading.component'
import { SearchBoxSymbol } from 'components/search-box-symbol/search-box-symbol.component'
import { Footer, Button } from './company.page.styled'
import { CompanySummary } from './summary/company-summary.component'
import { ErrorMessage } from './error-message/error-message.component'
import { CompanySummaryHeader } from './summary/header/company-summary-header.component'

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>()
  const history = useHistory()
  const { company, status: getCompanyStatus } = useCompany(symbol)
  const {
    data: quote,
    status: getQuoteStatus,
    call: callGetQuote,
  } = useRequest<Quote>(() => QuoteService.getQuote(symbol))

  useEffect(() => {
    callGetQuote()
  }, [symbol])

  const onSearch = (symbolToSearch: string) => {
    history.push(`/company/${symbolToSearch}`)
  }

  const canShowCompanySummary =
    company &&
    quote &&
    getCompanyStatus === 'success' &&
    getQuoteStatus === 'success'
  const isLoading =
    getCompanyStatus === 'loading' || getQuoteStatus === 'loading'

  return (
    <Layout
      path={[
        { name: 'Home', url: '/' },
        { name: 'Company' },
        { name: symbol.toUpperCase() || 'Company' },
      ]}
    >
      <SearchBoxSymbol
        onSearch={onSearch}
        placeholder="Search for a company..."
      />
      {canShowCompanySummary && (
        <>
          <CompanySummaryHeader company={company} quote={quote} />
          <CompanySummary company={company} quote={quote} />
        </>
      )}
      <ErrorMessage
        symbol={symbol}
        companyStatus={getCompanyStatus}
        quoteStatus={getQuoteStatus}
      />
      {!isLoading && (
        <Footer>
          <Button variant="secondary" onClick={() => history.push('/')}>
            Home page
          </Button>
        </Footer>
      )}
      {isLoading && <Loading />}
    </Layout>
  )
}

export default CompanyPage
