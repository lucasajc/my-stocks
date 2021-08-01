import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from 'common/test-wrapper'
import { Layout } from './layout.component'

const history = createMemoryHistory()

describe('Layout component', () => {
  it('renders breadcrumb and children', () => {
    render(
      <Router history={history}>
        <Layout
          path={[
            { name: 'path 1', url: '/path-1/url' },
            { name: 'path 2', url: '/path-2/url' },
          ]}
        >
          <span>some layout content</span>
        </Layout>
      </Router>,
      { wrapper: TestWrapper }
    )

    expect(screen.getByText('path 1')).toBeInTheDocument()
    expect(screen.getByText('path 2')).toBeInTheDocument()
    expect(screen.getByText('some layout content')).toBeInTheDocument()
  })
})
