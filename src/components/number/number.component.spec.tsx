import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { Number } from './number.component'

describe('Number component', () => {
  it('shows a default number with two decimal places', () => {
    render(<Number value={0} />, { wrapper: TestWrapper })

    expect(screen.getByText('0.00')).toBeInTheDocument()
  })

  it('shows N/A label when value is not provided', () => {
    render(<Number />, { wrapper: TestWrapper })

    expect(screen.getByText('N/A')).toBeInTheDocument()
  })

  it('shows formatted zero number when value is zero', () => {
    render(<Number value={0} />, { wrapper: TestWrapper })

    expect(screen.getByText('0.00')).toBeInTheDocument()
  })

  it('shows a formatted negative number', () => {
    render(<Number value={-1.239} />, { wrapper: TestWrapper })

    expect(screen.getByText('-1.24')).toBeInTheDocument()
  })

  it('shows a formatted positive number with positive sign', () => {
    render(<Number value={1.239} showPositiveSign />, { wrapper: TestWrapper })

    expect(screen.getByText('+1.24')).toBeInTheDocument()
  })

  it('shows a formatted positive number without positive sign', () => {
    render(<Number value={1.239} showPositiveSign={false} />, {
      wrapper: TestWrapper,
    })

    expect(screen.getByText('1.24')).toBeInTheDocument()
  })

  it('shows a formatted negative number with percentage', () => {
    render(<Number value={-1.239} percentage />, { wrapper: TestWrapper })

    expect(screen.getByText('-1.24%')).toBeInTheDocument()
  })

  it('shows a formatted positive number with percentage', () => {
    render(<Number value={1.239} percentage showPositiveSign />, {
      wrapper: TestWrapper,
    })

    expect(screen.getByText('+1.24%')).toBeInTheDocument()
  })

  it('shows a number wrapped by parenthesis', () => {
    render(
      <Number value={1.239} wrappedByParenthesis percentage showPositiveSign />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('(+1.24%)')).toBeInTheDocument()
  })
})
