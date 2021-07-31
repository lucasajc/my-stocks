import styled from 'styled-components'

export const Container = styled.header`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  background: ${(props) => props.theme.card.default.backgroundColor};
`

export const Body = styled.div`
  display: flex;
  grid-gap: 36px;
  align-items: center;
  justify-content: center;
  width: 1024px;
`

export const Links = styled.nav`
  display: flex;
  grid-gap: 16px;
  justify-content: space-between;
  @media only screen and (min-width: 480px) {
    margin-right: 120px;
  }
`

export const AppLogo = styled.img`
  height: 36px;
`
