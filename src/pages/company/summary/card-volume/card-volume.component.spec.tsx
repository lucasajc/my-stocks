import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardVolume } from 'pages/company/summary/card-volume/card-volume.component'

describe('Card volume component', () => {
  it('shows the latest volume by default', () => {
    render(
      <CardVolume latestVolume={1} previousVolume={2} avgTotalVolume={3} />,
      {
        wrapper: TestWrapper,
      }
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('shows the previous volume when the latest volume is not available', () => {
    render(<CardVolume previousVolume={73769270} avgTotalVolume={1} />, {
      wrapper: TestWrapper,
    })

    expect(screen.getByText('73769270')).toBeInTheDocument()
  })

  it('shows N/A label when data is not provided', () => {
    render(<CardVolume />, {
      wrapper: TestWrapper,
    })

    expect(screen.getAllByText('N/A')[0]).toBeInTheDocument()
    expect(screen.getAllByText('N/A')[1]).toBeInTheDocument()
  })
})
