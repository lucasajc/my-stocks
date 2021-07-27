import React from 'react'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { CardVolume } from 'pages/company/card-volume/card-volume.component'

describe('Card volume component', () => {
  it('shows the latest volume by default', () => {
    render(<CardVolume latestVolume={421354558} previousVolume={73769270} />, {
      wrapper: TestWrapper,
    })

    expect(screen.getByText(421354558)).toBeInTheDocument()
  })

  it('shows the previous volume whe latest volume is no available', () => {
    render(<CardVolume previousVolume={73769270} />, {
      wrapper: TestWrapper,
    })

    expect(screen.getByText(73769270)).toBeInTheDocument()
  })
})
