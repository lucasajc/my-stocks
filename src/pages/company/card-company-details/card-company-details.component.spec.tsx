import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardCompanyDetails } from './card-company-details.component'

describe('Card company details component', () => {
  it('shows company details', () => {
    render(
      <CardCompanyDetails
        CEO="some ceo"
        city="some city"
        country="some country"
        employees={2000}
        industry="some industry"
        sector="some sector"
        website="https://some.website"
        tags={['tag 1', 'tag 2', 'tag 3']}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('some ceo')).toBeInTheDocument()
    expect(screen.getByText('some city')).toBeInTheDocument()
    expect(screen.getByText('some country')).toBeInTheDocument()
    expect(screen.getByText('2000')).toBeInTheDocument()
    expect(screen.getByText('some industry')).toBeInTheDocument()
    expect(screen.getByText('some sector')).toBeInTheDocument()
    expect(screen.getByText('https://some.website')).toBeInTheDocument()
    expect(screen.getByText('tag 1, tag 2, tag 3')).toBeInTheDocument()
  })

  it('shows N/A when value is not available', () => {
    render(
      <CardCompanyDetails
        CEO="some ceo"
        city={undefined}
        country="some country"
        employees={undefined}
        industry="some industry"
        sector="some sector"
        website="https://some.website"
        tags={['tag 1', 'tag 2', 'tag 3']}
      />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getAllByText('N/A')[0]).toBeInTheDocument()
    expect(screen.getAllByText('N/A')[1]).toBeInTheDocument()
  })
})
