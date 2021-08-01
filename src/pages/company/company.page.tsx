import React, { useEffect, useMemo } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Quote, QuoteService } from 'client-api/quote'
import { useCompany, useFavorites, useRequest } from 'common/hooks'
import { Text } from 'components/text/text.component'
import { Layout } from 'components/layout/layout.component'
import { Loading } from 'components/loading/loading.component'
import { SearchBoxSymbol } from 'components/search-box-symbol/search-box-symbol.component'
import { ButtonFavorite } from 'components/button-favorite/button-favorite.component'
import {
  Footer,
  Button,
  ContainerNotFound,
  Header,
  Title,
  PageActions,
} from './company.page.styled'
import { CompanySummary } from './summary/company-summary.component'

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>()
  const history = useHistory()
  const { favoriteCompanies, favorite, unfavorite } = useFavorites()
  const { company, status: getCompanyStatus } = useCompany(symbol)
  const {
    data: quote,
    status: getQuoteStatus,
    call: callGetQuote,
  } = useRequest<Quote>(() => QuoteService.getQuote(symbol))

  useEffect(() => {
    callGetQuote()
  }, [symbol])

  const isFavorite = useMemo(() => {
    if (!company) return false
    return !!favoriteCompanies.find(
      (favoriteCompany) => favoriteCompany.symbol === company.symbol
    )
  }, [favoriteCompanies, company])

  const onSearch = (symbolToSearch: string) => {
    history.push(`/company/${symbolToSearch}`)
  }

  const onFavorite = () => {
    if (isFavorite) {
      unfavorite(company)
      return
    }
    favorite(company)
  }

  const canShowCompanySummary =
    company &&
    quote &&
    getCompanyStatus === 'success' &&
    getQuoteStatus === 'success'
  const isLoading =
    getCompanyStatus === 'loading' || getQuoteStatus === 'loading'
  const hasError = getCompanyStatus === 'error' || getQuoteStatus === 'error'

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
            <PageActions>
              <ButtonFavorite active={isFavorite} onClick={onFavorite} />
            </PageActions>
          </Header>
          <CompanySummary company={company} quote={quote} />
        </>
      )}
      <ContainerNotFound>
        {hasError && (
          <>
            <Text weight="light" size="xxlg">
              <span>
                {'Sorry, we could not find any company with the given symbol '}
              </span>
              <strong>{`"${symbol}"`}</strong>
            </Text>
            <Text weight="light" size="sm">
              <p>Try searching for another symbol, such as IBM, AAPL, MSFT.</p>
            </Text>
          </>
        )}
      </ContainerNotFound>
      {!isLoading && (
        <Footer>
          <Button variant="secondary" onClick={() => history.push('/')}>
            Go to home page
          </Button>
        </Footer>
      )}
      {isLoading && <Loading />}
    </Layout>
  )
}

export default CompanyPage
