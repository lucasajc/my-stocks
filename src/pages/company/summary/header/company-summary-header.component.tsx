import React, { useMemo } from 'react'
import Company from 'client-api/company/company.model'
import { Quote } from 'client-api/quote'
import { useFavorites } from 'common/hooks'
import { Text } from 'components/text/text.component'
import { ButtonFavorite } from 'components/button-favorite/button-favorite.component'
import { Header, PageActions, Title } from './company-summary-header.styled'

interface IProps {
  company: Company
  quote: Quote
}

export const CompanySummaryHeader = ({ company, quote }: IProps) => {
  const { favoriteCompanies, favorite, unfavorite } = useFavorites()
  const isFavorite = useMemo(() => {
    if (!company) return false
    return !!favoriteCompanies.find(
      (favoriteCompany) => favoriteCompany.symbol === company.symbol
    )
  }, [favoriteCompanies, company])

  const onFavorite = () => {
    if (isFavorite) {
      unfavorite(company)
      return
    }
    favorite(company)
  }

  return (
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
  )
}
