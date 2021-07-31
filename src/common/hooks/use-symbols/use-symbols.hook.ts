import { RootState, useDispatch, useSelector } from 'store/index'
import { useEffect } from 'react'
import { SymbolService } from 'client-api/symbol'
import { symbolsSlice } from 'store/slices/symbols.slice'
import StockSymbol from 'client-api/symbol/symbol.model'

interface IUseSymbols {
  symbols: StockSymbol[]
}

const selectorMap = (state: RootState) => ({
  symbols: state.symbols.value,
})

const WEEK_IN_MILLISECONDS = 604800000

export const useSymbols = (): IUseSymbols => {
  const { symbols } = useSelector(selectorMap)
  const dispatch = useDispatch()

  useEffect(() => {
    if (symbols?.length) return
    const localStorageDatetime = new Date(
      Number(localStorage.getItem('symbol-list:datetime') || '0')
    ).getTime()

    if (Date.now() - localStorageDatetime > WEEK_IN_MILLISECONDS) {
      SymbolService.getSymbols().then((response) => {
        dispatch(symbolsSlice.actions.updateSymbols(response.data))
        localStorage.setItem('symbol-list', JSON.stringify(response.data))
        localStorage.setItem('symbol-list:datetime', Date.now().toString())
      })
    } else {
      const localStorageList = JSON.parse(
        localStorage.getItem('symbol-list') || '[]'
      )
      dispatch(symbolsSlice.actions.updateSymbols(localStorageList))
    }
  }, [])

  return { symbols }
}
