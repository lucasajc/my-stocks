import { act, renderHook } from '@testing-library/react-hooks'
import { TestWrapper } from 'common/test-wrapper'
import CompanyBuilder from 'common/builders/company.builder'
import useFavorites from './use-favorites.hook'

const companyToFavorite = new CompanyBuilder().withSymbol('some-symbol').build()
const companyToUnfavorite = new CompanyBuilder()
  .withSymbol('another-symbol')
  .build()

describe('Use favorites hook', () => {
  it('adds a company to the favorite list', async () => {
    const { result } = renderHook(() => useFavorites(), {
      wrapper: TestWrapper,
    })

    act(() => result.current.favorite(companyToFavorite))

    expect(result.current.favoriteCompanies).toEqual([companyToFavorite])
  })

  it('removes a company from the favorite list', () => {
    const { result } = renderHook(() => useFavorites(), {
      wrapper: TestWrapper,
    })

    act(() => result.current.favorite(companyToFavorite))
    act(() => result.current.favorite(companyToUnfavorite))
    act(() => result.current.unfavorite(companyToUnfavorite))

    expect(result.current.favoriteCompanies).toEqual([companyToFavorite])
  })

  it('adds the favorite companies list to the local storage', () => {
    const { result } = renderHook(() => useFavorites(), {
      wrapper: TestWrapper,
    })

    act(() => result.current.favorite(companyToFavorite))
    act(() => result.current.favorite(companyToUnfavorite))
    act(() => result.current.unfavorite(companyToUnfavorite))

    expect(JSON.parse(localStorage.getItem('favoriteCompanies'))).toEqual([
      companyToFavorite,
    ])
  })
})
