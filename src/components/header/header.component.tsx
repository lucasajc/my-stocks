import React from 'react'
import { useTheme } from 'app/themes/theme.context'
import { Link } from 'components/link/link.component'
import { Container, Body, Links, AppLogo, ThemeCheckbox } from './header.styled'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  const onChangeTheme = () => {
    const newTheme = theme === 'main' ? 'dark' : 'main'
    setTheme(theme === 'main' ? 'dark' : 'main')
    localStorage.setItem('theme', newTheme)
  }

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
        <div>
          <ThemeCheckbox>
            <input
              type="checkbox"
              onChange={onChangeTheme}
              checked={theme === 'dark'}
            />
            Dark mode
          </ThemeCheckbox>
        </div>
      </Body>
    </Container>
  )
}
