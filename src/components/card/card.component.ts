import styled from 'styled-components'

export const Card = styled.div`
  background: ${(props) => props.theme.card.backgroundColor};
  padding: 24px;
  border-radius: 16px;

  @media only screen and (min-width: 480px) {
    width: 288px;
  }
`

export const CardHeader = styled.div`
  padding: 0 0 8px;
`

export const CardPrimaryContent = styled.span`
  font-size: 36px;
`
