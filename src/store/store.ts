import { configureStore } from '@reduxjs/toolkit'
import favoriteCompaniesReducer from './slices/favorite.slice'
import symbolsSlice from './slices/symbols.slice'

const store = configureStore({
  reducer: {
    favoriteCompanies: favoriteCompaniesReducer,
    symbols: symbolsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
