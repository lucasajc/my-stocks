import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const Cell = styled.div`
  padding: 0 8px 2px 0;
  :nth-child(even) {
    text-align: right;
  }
`
