import styled from 'styled-components'
import { Card } from 'components/card/card.component'
import { Grid } from 'pages/company/summary/grid/grid.styled'

export const CardLatestPrice = styled(Card)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardLatestPriceGrid = styled(Grid)`
  margin-left: 8px;
`

export const PriceDetails = styled.div`
  > * {
    :not(:first-child) {
      margin-left: 8px;
    }
  }
`
