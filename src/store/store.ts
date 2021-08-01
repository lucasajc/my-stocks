import { configureStore } from '@reduxjs/toolkit'
import favoriteCompaniesReducer from './slices/favorite.slice'
import symbolsSlice from './slices/symbols.slice'
import companiesSlice from './slices/companies.slice'

const store = configureStore({
  reducer: {
    favoriteCompanies: favoriteCompaniesReducer,
    symbols: symbolsSlice,
    companies: companiesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
