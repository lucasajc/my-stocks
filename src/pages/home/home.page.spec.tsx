import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from 'common/test-wrapper'
import HomePage from './home.page'

describe('Company page component', () => {
  it('navigates to a company page when user searches for a company', async () => {
    const history = createMemoryHistory()
    history.push = jest.fn()
    render(
      <Router history={history}>
        <HomePage />
      </Router>,
      { wrapper: TestWrapper }
    )

    userEvent.type(
      screen.getByPlaceholderText('Search for a company...'),
      'AAPL'
    )
    userEvent.click(screen.getByRole('button', { name: 'Search' }))

    await waitFor(() =>
      expect(history.push).toHaveBeenCalledWith('/company/AAPL')
    )
  })
})
