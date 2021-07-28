import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardQuoteSummary } from 'pages/company/summary/card-quote-summary/card-quote-summary.component'

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
        marketCap={31000000000}
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
    expect(screen.getByText('31.00')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })

  it('shows N/A label when bid price is not provided', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={2}
        peRatio={3}
        iexBidPrice={null}
        iexBidSize={5}
        iexAskPrice={6}
        iexAskSize={7}
        marketCap={31000000000}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('N/A')).toBeInTheDocument()
    expect(screen.queryByText('5')).not.toBeInTheDocument()
  })

  it('shows N/A label when bid size is not provided', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={2}
        peRatio={3}
        iexBidPrice={4}
        iexBidSize={null}
        iexAskPrice={6}
        iexAskSize={7}
        marketCap={31000000000}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('N/A')).toBeInTheDocument()
    expect(screen.queryByText('4.00')).not.toBeInTheDocument()
  })

  it('shows N/A label when ask price is not provided', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={2}
        peRatio={3}
        iexBidPrice={4}
        iexBidSize={5}
        iexAskPrice={null}
        iexAskSize={7}
        marketCap={31000000000}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('N/A')).toBeInTheDocument()
    expect(screen.queryByText('7')).not.toBeInTheDocument()
  })

  it('shows N/A label when ask size is not provided', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={2}
        peRatio={3}
        iexBidPrice={4}
        iexBidSize={5}
        iexAskPrice={6}
        iexAskSize={null}
        marketCap={31000000000}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('N/A')).toBeInTheDocument()
    expect(screen.queryByText('6.00')).not.toBeInTheDocument()
  })

  it('shows N/A label when week 52 low is not provided', () => {
    render(
      <CardQuoteSummary
        week52Low={null}
        week52High={2}
        peRatio={3}
        iexBidPrice={4}
        iexBidSize={5}
        iexAskPrice={6}
        iexAskSize={7}
        marketCap={31000000000}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('N/A')).toBeInTheDocument()
    expect(screen.queryByText('2.00')).not.toBeInTheDocument()
  })

  it('shows N/A label when week 52 high is not provided', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={null}
        peRatio={3}
        iexBidPrice={4}
        iexBidSize={5}
        iexAskPrice={6}
        iexAskSize={7}
        marketCap={31000000000}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('N/A')).toBeInTheDocument()
    expect(screen.queryByText('1.00')).not.toBeInTheDocument()
  })

  it('shows N/A labels when market cap and pe ratio are not provided', () => {
    render(
      <CardQuoteSummary
        week52Low={1}
        week52High={2}
        peRatio={null}
        iexBidPrice={4}
        iexBidSize={5}
        iexAskPrice={6}
        iexAskSize={7}
        marketCap={null}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getAllByText('N/A')[0]).toBeInTheDocument()
    expect(screen.getAllByText('N/A')[1]).toBeInTheDocument()
  })
})
