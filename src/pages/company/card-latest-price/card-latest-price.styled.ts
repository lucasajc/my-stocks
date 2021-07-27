import styled from 'styled-components'
import { Card } from 'components/card/card.component'

export const CardLatestPriceStyled = styled(Card)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardQuoteSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const CardQuoteSummaryGridCell = styled.div`
  padding: 4px;
`

export const PriceDetails = styled.div`
  > * {
    :not(:first-child) {
      margin-left: 8px;
    }
  }
`
