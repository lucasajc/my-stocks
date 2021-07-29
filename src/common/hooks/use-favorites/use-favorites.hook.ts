import Company from 'client-api/company/company.model'
import { RootState, useDispatch, useSelector } from 'store/index'
import { favoriteCompaniesSlice } from 'store/slices/favorite.slice'
import { useEffect } from 'react'

interface IUseFavorites {
  favoriteCompanies: Company[]
  favorite: (company: Company) => void
  unfavorite: (company: Company) => void
}

const selectorMap = (state: RootState) => ({
  favoriteCompanies: state.favoriteCompanies.value,
})

const useFavorites = (): IUseFavorites => {
  const { favoriteCompanies } = useSelector(selectorMap)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('favoriteCompanies', JSON.stringify(favoriteCompanies))
  }, [favoriteCompanies])

  const favorite = (company: Company) => {
    dispatch(favoriteCompaniesSlice.actions.add(company))
  }

  const unfavorite = (company: Company) => {
    dispatch(favoriteCompaniesSlice.actions.remove(company))
  }

  return { favoriteCompanies: favoriteCompanies || [], favorite, unfavorite }
}

export default useFavorites
