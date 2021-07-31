import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import { Breadcrumb } from 'components/breadcrumb/breadcrumb.component'
import { TestWrapper } from 'common/test-wrapper'
import userEvent from '@testing-library/user-event'

const history = createMemoryHistory()

describe('Breadcrumb component', () => {
  beforeEach(() => {
    history.push = jest.fn()
  })

  it('navigates previous paths with urls on breadcrumb list', () => {
    render(
      <Router history={history}>
        <Breadcrumb
          path={[
            { name: 'path 1', url: '/path-1/url' },
            { name: 'path 2', url: '/path-2/url' },
            { name: 'path 3' },
          ]}
        />
      </Router>,
      { wrapper: TestWrapper }
    )

    userEvent.click(screen.getByText('path 1'))
    userEvent.click(screen.getByText('path 2'))
    userEvent.click(screen.getByText('path 3'))

    expect(history.push).toHaveBeenNthCalledWith(1, '/path-1/url')
    expect(history.push).toHaveBeenNthCalledWith(2, '/path-2/url')
    expect(history.push).toHaveBeenCalledTimes(2)
  })
})
