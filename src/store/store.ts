import { configureStore } from '@reduxjs/toolkit'
import favoriteCompaniesReducer from './slices/favorite.slice'

const store = configureStore({
  reducer: {
    favoriteCompanies: favoriteCompaniesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
