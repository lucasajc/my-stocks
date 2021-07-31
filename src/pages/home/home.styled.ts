import styled from 'styled-components'
import { Card as CardUI } from 'components/card/card.component'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  right: 0%;
  @media only screen and (min-width: 720px) {
    width: 150%;
  }
`

export const Card = styled(CardUI)`
  position: absolute;
  top: 24%;
  max-width: 435px;
  min-width: 0;
  border-radius: 36px;
  @media only screen and (min-width: 720px) {
    top: 35%;
  }
`
