import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { ErrorMessage } from './error-message.component'

describe('Error message component', () => {
  it('shows not found erro message', () => {
    render(
      <ErrorMessage
        symbol="some-symbol"
        companyStatus="not-found"
        quoteStatus="not-found"
      />,
      { wrapper: TestWrapper }
    )

    expect(
      screen.getByText(
        'Sorry, we could not find any company with the given symbol'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('"some-symbol"')).toBeInTheDocument()
  })

  it('shows generic error message', () => {
    render(
      <ErrorMessage
        symbol="some-symbol"
        companyStatus="error"
        quoteStatus="error"
      />,
      { wrapper: TestWrapper }
    )

    expect(
      screen.getByText(
        'Sorry, we could not find any company with the given symbol. Please try again later.'
      )
    ).toBeInTheDocument()
    expect(screen.queryByText('"IBN"')).not.toBeInTheDocument()
  })
})
