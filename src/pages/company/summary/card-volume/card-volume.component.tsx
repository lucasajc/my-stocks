import React from 'react'
import { Quote } from 'client-api/quote'
import {
  Card,
  CardHeader,
  CardPrimaryContent,
} from 'components/card/card.component'
import { Text } from 'components/text/text.component'
import { CardFooterStyled as CardFooter } from 'pages/company/summary/card-volume/card-volume.styled'

type Props = Partial<
  Pick<Quote, 'latestVolume' | 'previousVolume' | 'avgTotalVolume'>
>

export const CardVolume = ({
  latestVolume,
  previousVolume,
  avgTotalVolume,
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <Text size="md" weight="light">
          Volume
        </Text>
      </CardHeader>
      <CardPrimaryContent>
        {latestVolume || previousVolume || 'N/A'}
      </CardPrimaryContent>
      <CardFooter>
        <Text size="sm" weight="light">
          Average total volume:
        </Text>
        <Text size="sm" weight="normal">
          {avgTotalVolume || 'N/A'}
        </Text>
      </CardFooter>
    </Card>
  )
}
