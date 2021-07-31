import styled from 'styled-components'
import { Button as ButtonUI } from 'components/button/button.component'

export const Container = styled.div`
  padding: 16px;
  max-width: 1056px;
  margin: auto;
`

export const Button = styled(ButtonUI)`
  width: 100%;
  @media only screen and (min-width: 480px) {
    width: auto;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`
