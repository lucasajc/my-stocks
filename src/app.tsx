import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <h1>My Stocks Web App</h1>
    </Provider>
  )
}

export default App
