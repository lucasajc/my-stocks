import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardLatestPrice } from 'pages/company/summary/card-latest-price/card-latest-price.component'

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
    expect(screen.getByText('(-4.00%)')).toBeInTheDocument()
    expect(screen.getByText('+5.00')).toBeInTheDocument()
    expect(screen.getByText('6.00')).toBeInTheDocument()
    expect(screen.getByText('7.00')).toBeInTheDocument()
  })

  it('shows N/A label when data is not available', () => {
    render(
      <CardLatestPrice
        latestPrice={null}
        low={null}
        high={null}
        changePercent={null}
        change={null}
        iexClose={null}
        iexOpen={null}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getAllByText('N/A')).toHaveLength(5)
  })

  it('shows formatted change and change percent numbers when values are zero', () => {
    render(
      <CardLatestPrice
        latestPrice={null}
        low={null}
        high={null}
        changePercent={0}
        change={0}
        iexClose={null}
        iexOpen={null}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('0.00')).toBeInTheDocument()
    expect(screen.getByText('(0.00%)')).toBeInTheDocument()
  })
})
