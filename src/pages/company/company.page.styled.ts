import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
  max-width: 1056px;
  margin: auto;
`

export const Header = styled.div`
  padding: 0 8px 12px;
`

export const Title = styled.h2`
  margin: 0 0 4px;
`

export const CardContainer = styled.div`
  > * {
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    > * {
      margin-right: 16px;
    }
  }
`
