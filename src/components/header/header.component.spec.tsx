import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from 'common/test-wrapper'
import { Header } from './header.component'

const history = createMemoryHistory()

describe('Header component', () => {
  it('navigates to page urls when user clicks on the respective links', () => {
    history.push = jest.fn()
    render(
      <Router history={history}>
        <Header />
      </Router>,
      { wrapper: TestWrapper }
    )

    userEvent.click(screen.getByAltText('My Stocks'))
    userEvent.click(screen.getByText('Home'))
    userEvent.click(screen.getByText('Favorites'))

    expect(history.push).toHaveBeenNthCalledWith(1, '/')
    expect(history.push).toHaveBeenNthCalledWith(2, '/')
    expect(history.push).toHaveBeenNthCalledWith(3, '/favorites')
  })
})
