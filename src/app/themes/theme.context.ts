import { createContext, useContext } from 'react'
import { IAppThemeContext } from './theme.types'

export const AppThemeContext = createContext<IAppThemeContext>({
  theme: 'main',
  setTheme: () => {},
})

export const useTheme = () => useContext(AppThemeContext)
