import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { Text } from 'components/text/text.component'

describe('Text component', () => {
  it('shows text value', () => {
    render(<Text>some text value</Text>, { wrapper: TestWrapper })

    expect(screen.getByText('some text value')).toBeInTheDocument()
  })
})
