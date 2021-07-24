import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from './store'
import { main } from './main.theme'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={main}>
        <h1>My Stocks Web App</h1>
      </ThemeProvider>
    </Provider>
  )
}

export default App
