import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Company from 'client-api/company/company.model'

export const favoriteCompaniesSlice = createSlice({
  name: 'favoriteCompanies',
  initialState: {
    value: JSON.parse(localStorage.getItem('favoriteCompanies')) || [],
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
    remove: (state, payloadAction: PayloadAction<Company>) => {
      state.value = state.value.filter(
        (company: Company) => company.symbol !== payloadAction.payload.symbol
      )
    },
  },
})
const favoriteCompaniesReducer = favoriteCompaniesSlice.reducer

export const { add } = favoriteCompaniesSlice.actions
export default favoriteCompaniesReducer
