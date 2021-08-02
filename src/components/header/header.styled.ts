import styled from 'styled-components'

export const Container = styled.header`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  flex-wrap: wrap;
  color: ${(props) => props.theme.text.colors.labels.default};
  background: ${(props) => props.theme.card.default.backgroundColor};
  @media only screen and (min-width: 480px) {
    flex-wrap: nowrap;
  }
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
`

export const AppLogo = styled.img`
  height: 36px;
`

export const ThemeCheckbox = styled.label`
  cursor: pointer;
  display: flex;
  grid-gap: 4px;
  align-items: center;
  justify-content: center;
`
