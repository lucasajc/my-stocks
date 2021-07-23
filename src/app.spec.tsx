import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './app'

describe('App component', () => {
  it('render My Stocks label', () => {
    render(<App />)

    expect(screen.getByText('My Stocks')).toBeInTheDocument()
  })
})
