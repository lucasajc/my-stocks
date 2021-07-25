import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '../store'
import { main } from './themes/main.theme'
import { AppContainer } from './app.styled'
import './app.css'

const App = () => {
  console.log(process.env.API_URL)
  console.log(process.env.API_TOKEN)
  return (
    <Provider store={store}>
      <ThemeProvider theme={main}>
        <AppContainer>
          <span>My Stocks Web App</span>
        </AppContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
