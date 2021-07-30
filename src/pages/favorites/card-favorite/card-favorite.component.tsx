import React from 'react'
import { Text } from 'components/text/text.component'
import { Button } from 'components/button/button.component'
import { Card, Link } from './card-favorite.styled'

interface IProps {
  symbol: string
  name: string
  onRemove: (symbol: string, event: React.MouseEvent<HTMLElement>) => void
}

export const CardFavorite = ({ symbol, name, onRemove }: IProps) => {
  return (
    <Link key={symbol} to={`/company/${symbol}`}>
      <Card>
        <div>
          <div>
            <Text size="lg" weight="bold">
              {symbol}
            </Text>
          </div>
          <Text size="lg" weight="light">
            {name}
          </Text>
        </div>

        <Button
          variant="secondary"
          onClick={(event) => onRemove(symbol, event)}
        >
          Remove
        </Button>
      </Card>
    </Link>
  )
}
