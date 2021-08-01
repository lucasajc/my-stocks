import { Link as LinkUI } from 'react-router-dom'
import { Text } from 'components/text/text.component'
import { Card as CardUI } from 'components/card/card.component'
import styled from 'styled-components'

export const Card = styled(CardUI)`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.card.hover.backgroundColor};
  }

  @media only screen and (min-width: 480px) {
    grid-gap: 12px;
    grid-template-columns: 1fr 120px;
  }
`

export const CompanyTitle = styled(Text)`
  text-decoration: underline;
  :hover {
    color: ${(props) => props.theme.link.hover.color};
  }
`

export const Link = styled(LinkUI)`
  text-decoration: none;
  color: inherit;
`
