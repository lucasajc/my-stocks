import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from 'store/index'
import { AppThemeContext, dark, main, ThemeName } from 'app/themes'
import { AppContainer } from './app.styled'
import Routes from './routes.component'
import './app.css'

const themes = {
  main,
  dark,
}

const App = () => {
  const [theme, setTheme] = React.useState<ThemeName>(
    (localStorage.getItem('theme') as ThemeName) || 'main'
  )

  return (
    <Provider store={store}>
      <AppThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themes[theme]}>
          <AppContainer>
            <Routes />
          </AppContainer>
        </ThemeProvider>
      </AppThemeContext.Provider>
    </Provider>
  )
}

export default App
