import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchBoxSymbol } from 'components/search-box-symbol/search-box-symbol.component'
import { TestWrapper } from 'common/test-wrapper'
import userEvent from '@testing-library/user-event'
import { store } from 'store/index'
import { symbolsSlice } from 'store/slices/symbols.slice'

describe('Search Box Symbol component', () => {
  it('shows a list of matched results when user types a part of a symbol', () => {
    store.dispatch(
      symbolsSlice.actions.updateSymbols([
        { symbol: 'a', name: 'first name with letter a' },
        { symbol: 'aa', name: 'second name with letter a' },
        { symbol: 'aaa', name: 'third name with letter a' },
        { symbol: 'b', name: 'first name with letter b' },
        { symbol: 'bb', name: 'second name with letter b' },
        { symbol: 'bbb', name: 'first name with letter b' },
      ])
    )
    render(
      <SearchBoxSymbol
        onSearch={jest.fn}
        placeholder="search for a company..."
      />,
      { wrapper: TestWrapper }
    )

    userEvent.type(screen.getByPlaceholderText('search for a company...'), 'aa')

    expect(
      screen.queryByText('first name with letter a')
    ).not.toBeInTheDocument()
    expect(screen.getByText('second name with letter a')).toBeInTheDocument()
    expect(screen.getByText('third name with letter a')).toBeInTheDocument()
    expect(
      screen.queryByText('first name with letter b')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('second name with letter b')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('third name with letter b')
    ).not.toBeInTheDocument()
  })

  it('calls onSearch when user selects an item from autocomplete list', () => {
    const onSearchCallback = jest.fn()
    store.dispatch(
      symbolsSlice.actions.updateSymbols([
        { symbol: 'some-symbol', name: 'some company name' },
      ])
    )
    render(
      <SearchBoxSymbol
        onSearch={onSearchCallback}
        placeholder="search for a company..."
      />,
      { wrapper: TestWrapper }
    )

    userEvent.type(
      screen.getByPlaceholderText('search for a company...'),
      'some-symbol'
    )
    userEvent.click(screen.getByText('some company name'))

    expect(onSearchCallback).toHaveBeenCalledWith('some-symbol')
  })
})
