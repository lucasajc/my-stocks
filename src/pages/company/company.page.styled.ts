import styled from 'styled-components'
import { Button as ButtonUI } from 'components/button/button.component'

export const Container = styled.div`
  padding: 32px 16px;
  max-width: 1056px;
  margin: auto;
`

export const Header = styled.div`
  padding: 32px 8px 12px;
`

export const Title = styled.h2`
  margin: 0 0 4px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ContainerNotFound = styled.div`
  margin: 36px 0;
  max-width: 440px;
`

export const PageActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px 0;
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
