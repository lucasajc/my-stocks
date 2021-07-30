import React, { useCallback } from 'react'
import { useFavorites } from 'common/hooks'
import { Container } from 'pages/favorites/favorites.styled'
import { CardFavorite } from './card-favorite/card-favorite.component'

const FavoritesPage = () => {
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
    <Container>
      <h2>Favorite companies</h2>
      {favoriteCompanies.map((company) => (
        <CardFavorite
          key={company.symbol}
          symbol={company.symbol}
          name={company.companyName}
          onRemove={onRemove}
        />
      ))}
    </Container>
  )
}

export default FavoritesPage
