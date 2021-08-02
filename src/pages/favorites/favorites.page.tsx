import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useFavorites } from 'common/hooks'
import { Layout } from 'components/layout/layout.component'
import { Footer, Button } from './favorites.styled'
import { CardFavorite } from './card-favorite/card-favorite.component'

const FavoritesPage = () => {
  const history = useHistory()
  const { favoriteCompanies, unfavorite } = useFavorites()

  const onRemove = useCallback(
    (symbol: string, event: React.MouseEvent<HTMLElement>) => {
      const companyToRemove = favoriteCompanies.find(
        (company) => company.symbol === symbol
      )
      if (companyToRemove) unfavorite(companyToRemove)
      event.preventDefault()
    },
    [favoriteCompanies]
  )

  return (
    <Layout path={[{ name: 'Home', url: '/' }, { name: 'Favorite companies' }]}>
      <h2>Favorite companies</h2>
      {favoriteCompanies.map((company) => (
        <CardFavorite
          key={company.symbol}
          symbol={company.symbol}
          name={company.companyName}
          onRemove={onRemove}
        />
      ))}
      <Footer>
        <Button variant="secondary" onClick={() => history.push('/')}>
          Home page
        </Button>
      </Footer>
    </Layout>
  )
}

export default FavoritesPage
