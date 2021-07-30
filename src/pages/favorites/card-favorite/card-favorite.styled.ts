import { Link as LinkUI } from 'react-router-dom'
import { Card as CardUI } from 'components/card/card.component'
import styled from 'styled-components'

export const Card = styled(CardUI)`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.card.hover.backgroundColor};
  }

  @media only screen and (min-width: 480px) {
    grid-gap: 12px;
    grid-template-columns: 1fr 120px;
  }
`

export const Link = styled(LinkUI)`
  text-decoration: none;
  color: inherit;
`
