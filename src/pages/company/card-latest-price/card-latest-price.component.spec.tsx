import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardLatestPrice } from 'pages/company/card-latest-price/card-latest-price.component'

describe('Card latest price component', () => {
  it('shows the formatted content', () => {
    render(
      <CardLatestPrice
        latestPrice={1}
        low={2}
        high={3}
        changePercent={-4}
        change={5}
        iexClose={6}
        iexOpen={7}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('1.00')).toBeInTheDocument()
    expect(screen.getByText('2.00')).toBeInTheDocument()
    expect(screen.getByText('3.00')).toBeInTheDocument()
    expect(screen.getByText('-4.00%')).toBeInTheDocument()
    expect(screen.getByText('+5.00')).toBeInTheDocument()
    expect(screen.getByText('6.00')).toBeInTheDocument()
    expect(screen.getByText('7.00')).toBeInTheDocument()
  })
})
