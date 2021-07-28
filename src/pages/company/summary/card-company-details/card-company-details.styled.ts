import styled from 'styled-components'

export const FieldTitle = styled.div`
  margin-bottom: 4px;
`

export const FieldValue = styled.div`
  margin-bottom: 12px;
`

export const Grid = styled.div`
  @media only screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 36px;
  }
`
