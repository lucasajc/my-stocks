import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from 'common/test-wrapper'
import { SearchBox } from './search-box.component'

describe('Search box component', () => {
  it('calls search callback when user searches', () => {
    const onSearchCallback = jest.fn()
    render(
      <SearchBox
        placeholder="Search for something..."
        onSearch={onSearchCallback}
      />,
      { wrapper: TestWrapper }
    )

    userEvent.type(
      screen.getByPlaceholderText('Search for something...'),
      'some search text'
    )
    userEvent.click(screen.getByText('Search'))

    expect(onSearchCallback).toHaveBeenCalledTimes(1)
    expect(onSearchCallback).toHaveBeenCalledWith('some search text')
  })

  it('does not call search callback when user clicks on search button without typing a search text', () => {
    const onSearchCallback = jest.fn()
    render(
      <SearchBox
        placeholder="Search for something..."
        onSearch={onSearchCallback}
      />,
      { wrapper: TestWrapper }
    )

    userEvent.click(screen.getByText('Search'))

    expect(onSearchCallback).not.toHaveBeenCalled()
  })

  it('does not call search callback when user submits without typing a search text', () => {
    const onSearchCallback = jest.fn()
    render(
      <SearchBox
        placeholder="Search for something..."
        onSearch={onSearchCallback}
      />,
      { wrapper: TestWrapper }
    )

    userEvent.type(
      screen.getByPlaceholderText('Search for something...'),
      '{enter}'
    )

    expect(onSearchCallback).not.toHaveBeenCalled()
  })
})
