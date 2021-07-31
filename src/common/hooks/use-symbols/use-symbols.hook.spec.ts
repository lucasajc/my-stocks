import { renderHook } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/dom'
import { TestWrapper } from 'common/test-wrapper'
import { SymbolService } from 'client-api/symbol'
import { store } from 'store/index'
import { symbolsSlice } from 'store/slices/symbols.slice'
import { useSymbols } from './use-symbols.hook'

const now = 1627679542574
const aWeek = 604800000
const lessThanAWeekAgo = now - aWeek + 1
const moreThanAWeekAgo = now - aWeek - 1

describe('Use Symbols hook', () => {
  const setUpMocks = () => {
    const getSymbolsMock = jest
      .spyOn(SymbolService, 'getSymbols')
      .mockResolvedValue({
        status: 200,
        data: [
          { symbol: 'some-symbol-from-api', name: 'some company name' },
          { symbol: 'another-symbol-from-api', name: 'another company name' },
        ],
      })

    return { getSymbolsMock }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    Date.now = jest.fn().mockImplementation(() => now)
  })

  afterEach(() => {
    localStorage.removeItem('symbol-list')
    localStorage.removeItem('symbol-list:datetime')
  })

  it('updates symbol list when there is no symbols in the store and in local storage', async () => {
    store.dispatch(symbolsSlice.actions.updateSymbols([]))
    localStorage.setItem('symbol-list', '')
    const { getSymbolsMock } = setUpMocks()

    const { result } = renderHook(() => useSymbols(), {
      wrapper: TestWrapper,
    })

    await waitFor(() =>
      expect(result.current.symbols).toEqual([
        { symbol: 'some-symbol-from-api', name: 'some company name' },
        { symbol: 'another-symbol-from-api', name: 'another company name' },
      ])
    )
    expect(getSymbolsMock).toHaveBeenCalledTimes(1)
  })

  it('updates symbol list from local storage when it was saved less than a week ago', async () => {
    store.dispatch(symbolsSlice.actions.updateSymbols([]))
    localStorage.setItem(
      'symbol-list',
      JSON.stringify([
        {
          symbol: 'some-symbol-from-local-storage',
          name: 'some company name',
        },
      ])
    )
    localStorage.setItem('symbol-list:datetime', lessThanAWeekAgo.toString())
    const { getSymbolsMock } = setUpMocks()

    const { result } = renderHook(() => useSymbols(), {
      wrapper: TestWrapper,
    })

    await waitFor(() =>
      expect(result.current.symbols).toEqual([
        { symbol: 'some-symbol-from-local-storage', name: 'some company name' },
      ])
    )
    expect(getSymbolsMock).not.toHaveBeenCalled()
  })

  it('updates symbol list from API when it was saved more than a week ago', async () => {
    store.dispatch(symbolsSlice.actions.updateSymbols([]))
    localStorage.setItem(
      'symbol-list',
      JSON.stringify([
        {
          symbol: 'some-symbol-from-local-storage',
          name: 'some company name',
        },
      ])
    )
    localStorage.setItem('symbol-list:datetime', moreThanAWeekAgo.toString())
    const { getSymbolsMock } = setUpMocks()

    const { result } = renderHook(() => useSymbols(), {
      wrapper: TestWrapper,
    })

    await waitFor(() =>
      expect(result.current.symbols).toEqual([
        { symbol: 'some-symbol-from-api', name: 'some company name' },
        { symbol: 'another-symbol-from-api', name: 'another company name' },
      ])
    )
    expect(getSymbolsMock).toHaveBeenCalledTimes(1)
  })

  it('does not updates symbol list when symbol list not is empty', async () => {
    store.dispatch(
      symbolsSlice.actions.updateSymbols([
        { symbol: 'some-symbol', name: 'some company name' },
      ])
    )
    const { getSymbolsMock } = setUpMocks()

    const { result } = renderHook(() => useSymbols(), {
      wrapper: TestWrapper,
    })

    await waitFor(() =>
      expect(result.current.symbols).toEqual([
        { symbol: 'some-symbol', name: 'some company name' },
      ])
    )
    expect(getSymbolsMock).not.toHaveBeenCalled()
  })

  it('stores the symbol list and the current datetime in local storage', async () => {
    store.dispatch(symbolsSlice.actions.updateSymbols([]))
    setUpMocks()

    renderHook(() => useSymbols(), {
      wrapper: TestWrapper,
    })

    await waitFor(() =>
      expect(localStorage.getItem('symbol-list')).toBe(
        JSON.stringify([
          { symbol: 'some-symbol-from-api', name: 'some company name' },
          { symbol: 'another-symbol-from-api', name: 'another company name' },
        ])
      )
    )
    expect(localStorage.getItem('symbol-list:datetime')).toBe(now.toString())
  })
})
