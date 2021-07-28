import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardQuoteSummary } from 'pages/company/card-quote-summary/card-quote-summary.component'

describe('Card quote summary component', () => {
  it('shows the quote summary with formatted values', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={1}
        peRatio={1}
        iexBidPrice={1}
        iexBidSize={1}
        iexAskPrice={1}
        iexAskSize={1}
        marketCap={1}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getAllByText('1.00')).toHaveLength(5)
    expect(screen.getAllByText('1')).toHaveLength(2)
  })
})
