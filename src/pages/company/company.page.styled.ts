import styled from 'styled-components'
import { Button as ButtonUI } from 'components/button/button.component'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
`

export const Button = styled(ButtonUI)`
  width: 100%;
  @media only screen and (min-width: 480px) {
    width: auto;
  }
`
