import styled from 'styled-components'
import { Card } from 'components/card/card.component'

export const Container = styled.div`
  padding: 16px;
`

export const Header = styled.div`
  padding: 0 8px 12px;
`

export const Title = styled.h2`
  margin: 0 0 4px;
`

export const CardHeader = styled.div`
  padding: 0 0 8px;
`

export const CardContainer = styled.div`
  > * {
    margin-bottom: 16px;
  }
`

export const CardQuoteSummary = styled(Card)`
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

export const Price = styled.span`
  font-size: 36px;
`

export const PriceDetails = styled.div`
  > * {
    :not(:first-child) {
      margin-left: 8px;
    }
  }
`
