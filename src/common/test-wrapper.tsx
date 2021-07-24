import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '../store'
import { main } from '../main.theme'

export const TestWrapper = ({ children }: PropsWithChildren<any>) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={main}>{children}</ThemeProvider>
    </Provider>
  )
}
