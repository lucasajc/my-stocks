import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CompanyBuilder, QuoteBuilder } from 'common/builders'
import { CompanySummary } from './company-summary.component'

describe('Company summary component', () => {
  it('shows company summary', () => {
    render(
      <CompanySummary
        company={new CompanyBuilder().withIndustry('some company industry')}
        quote={new QuoteBuilder()
          .withLatestPrice(99)
          .withLatestVolume(123456)
          .withPeRatio(34)}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('some company industry')).toBeInTheDocument()
    expect(screen.getByText('99.00')).toBeInTheDocument()
    expect(screen.getByText('123456')).toBeInTheDocument()
    expect(screen.getByText('34.00')).toBeInTheDocument()
  })
})
