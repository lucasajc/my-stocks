import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Company from 'client-api/company/company.model'

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, payloadAction: PayloadAction<Company>) => {
      if (
        !state.value.find(
          (company: Company) => company.symbol === payloadAction.payload.symbol
        )
      ) {
        state.value = [...state.value, payloadAction.payload]
      }
    },
  },
})
const companiesReducer = companiesSlice.reducer

export const { add } = companiesSlice.actions
export default companiesReducer
