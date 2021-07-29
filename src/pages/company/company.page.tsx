import React, { useEffect, useMemo } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Company, CompanyService } from 'client-api/company'
import { Quote, QuoteService } from 'client-api/quote'
import { useFavorites, useRequest } from 'common/hooks'
import { Text } from 'components/text/text.component'
import { SearchBox } from 'components/search-box/search-box.component'
import { Loading } from 'components/loading/loading.component'
import { ButtonFavorite } from 'components/button-favorite/button-favorite.component'
import {
  ActionsContainer,
  Button,
  Container,
  ContainerNotFound,
  Header,
  Title,
} from './company.page.styled'
import { CompanySummary } from './summary/company-summary.component'

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>()
  const history = useHistory()
  const { favoriteCompanies, favorite, unfavorite } = useFavorites()
  const {
    data: company,
    status: getCompanyStatus,
    call: callGetCompany,
  } = useRequest<Company>(() => CompanyService.getCompany(symbol))
  const {
    data: quote,
    status: getQuoteStatus,
    call: callGetQuote,
  } = useRequest<Quote>(() => QuoteService.getQuote(symbol))

  useEffect(() => {
    callGetCompany()
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
    <>
      <Container>
        <SearchBox onSearch={onSearch} placeholder="Search for a company..." />
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
              <ActionsContainer>
                <ButtonFavorite active={isFavorite} onClick={onFavorite} />
              </ActionsContainer>
            </Header>
            <CompanySummary company={company} quote={quote} />
          </>
        )}
        <ContainerNotFound>
          {hasError && (
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
        <ActionsContainer>
          <Button variant="secondary" onClick={history.goBack}>
            Go back
          </Button>
        </ActionsContainer>
      </Container>
      {isLoading && <Loading />}
    </>
  )
}

export default CompanyPage
