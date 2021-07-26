import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { Number } from './number.component'

describe('Number component', () => {
  it('shows a default number with two decimal places', () => {
    render(<Number value={0} />, { wrapper: TestWrapper })

    expect(screen.getByText('0.00')).toBeInTheDocument()
  })

  it('shows zero when value is not provided', () => {
    render(<Number />, { wrapper: TestWrapper })

    expect(screen.getByText('0.00')).toBeInTheDocument()
  })

  it('shows a formatted negative number', () => {
    render(<Number value={-1.239} />, { wrapper: TestWrapper })

    expect(screen.getByText('-1.24')).toBeInTheDocument()
  })

  it('shows a formatted positive number', () => {
    render(<Number value={1.239} />, { wrapper: TestWrapper })

    expect(screen.getByText('+1.24')).toBeInTheDocument()
  })

  it('shows a formatted negative number with percentage', () => {
    render(<Number value={-1.239} percentage />, { wrapper: TestWrapper })

    expect(screen.getByText('-1.24%')).toBeInTheDocument()
  })

  it('shows a formatted positive number  with percentage', () => {
    render(<Number value={1.239} percentage />, { wrapper: TestWrapper })

    expect(screen.getByText('+1.24%')).toBeInTheDocument()
  })
})
