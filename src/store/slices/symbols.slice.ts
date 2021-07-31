import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StockSymbol } from 'client-api/symbol'

export const symbolsSlice = createSlice({
  name: 'symbols',
  initialState: {
    value: JSON.parse(localStorage.getItem('symbols')) || [],
  },
  reducers: {
    updateSymbols: (state, payloadAction: PayloadAction<StockSymbol[]>) => {
      state.value = payloadAction.payload
    },
  },
})
const symbolsReducer = symbolsSlice.reducer

export const { updateSymbols } = symbolsSlice.actions
export default symbolsReducer
