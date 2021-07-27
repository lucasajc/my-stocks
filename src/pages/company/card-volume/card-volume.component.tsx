import React from 'react'
import { Quote } from 'client-api/quote'
import {
  Card,
  CardHeader,
  CardPrimaryContent,
} from 'components/card/card.component'
import { Text } from 'components/text/text.component'

type Props = Pick<Quote, 'latestVolume' | 'previousVolume'>

export const CardVolume = ({ latestVolume, previousVolume }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Text size="md" weight="light">
          Volume
        </Text>
      </CardHeader>
      <CardPrimaryContent>{latestVolume || previousVolume}</CardPrimaryContent>
    </Card>
  )
}
