import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardQuoteSummary } from 'pages/company/card-quote-summary/card-quote-summary.component'

describe('Card quote summary component', () => {
  it('shows the quote summary with formatted values', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={2}
        peRatio={3}
        iexBidPrice={4}
        iexBidSize={5}
        iexAskPrice={6}
        iexAskSize={7}
        marketCap={8000000000}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('1.00')).toBeInTheDocument()
    expect(screen.getByText('2.00')).toBeInTheDocument()
    expect(screen.getByText('3.00')).toBeInTheDocument()
    expect(screen.getByText('4.00')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('6.00')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('8.00')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })
})
