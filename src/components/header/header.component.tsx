import React from 'react'
import { Link } from 'components/link/link.component'
import { Container, Body, Links, AppLogo } from './header.styled'

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <AppLogo src="/assets/my-stocks.png" alt="My Stocks" />
      </Link>
      <Body>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </Links>
      </Body>
    </Container>
  )
}
