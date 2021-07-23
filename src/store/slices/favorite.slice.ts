import { createSlice } from '@reduxjs/toolkit'

export const favoriteCompaniesSlice = createSlice({
  name: 'favoriteCompanies',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, payloadAction) => {
      state.value = [...state.value, payloadAction.payload]
    },
  },
})
const favoriteCompaniesReducer = favoriteCompaniesSlice.reducer

export const { add } = favoriteCompaniesSlice.actions
export default favoriteCompaniesReducer
