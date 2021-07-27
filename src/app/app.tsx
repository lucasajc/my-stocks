import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from 'store/index'
import { main } from './themes/main.theme'
import { AppContainer } from './app.styled'
import Routes from './routes.component'
import './app.css'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={main}>
        <AppContainer>
          <Routes />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
