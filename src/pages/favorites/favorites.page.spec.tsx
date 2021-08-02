import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CompanyBuilder } from 'common/builders'
import { TestWrapper } from 'common/test-wrapper'
import { store } from 'store/index'
import { favoriteCompaniesSlice } from 'store/slices/favorite.slice'
import FavoritesPage from './favorites.page'

const history = createMemoryHistory()

const firstCompany = new CompanyBuilder()
  .withSymbol('some-symbol')
  .withCompanyName('some company name')
const secondCompany = new CompanyBuilder()
  .withSymbol('another-symbol')
  .withCompanyName('another company name')

describe('Favorites page component', () => {
  const renderFavoritesPage = () => {
    render(
      <Router history={history}>
        <FavoritesPage />
      </Router>,
      { wrapper: TestWrapper }
    )
  }

  beforeEach(() => {
    store.dispatch(
      favoriteCompaniesSlice.actions.add({
        ...firstCompany,
      })
    )
    store.dispatch(
      favoriteCompaniesSlice.actions.add({
        ...secondCompany,
      })
    )
  })

  afterEach(() => {
    store.dispatch(
      favoriteCompaniesSlice.actions.remove({
        ...firstCompany,
      })
    )
    store.dispatch(
      favoriteCompaniesSlice.actions.remove({
        ...secondCompany,
      })
    )
  })

  it('shows the list of saved companies', () => {
    renderFavoritesPage()

    expect(screen.getByText('some-symbol')).toBeInTheDocument()
    expect(screen.getByText('some company name')).toBeInTheDocument()
    expect(screen.getByText('another-symbol')).toBeInTheDocument()
    expect(screen.getByText('another company name')).toBeInTheDocument()
  })

  it('removes a company from saved companies list when user clicks on the remove button', () => {
    history.push = jest.fn()
    renderFavoritesPage()

    userEvent.click(screen.getAllByText('Remove')[0])

    expect(history.push).not.toHaveBeenCalled()
    expect(screen.queryByText('some-symbol')).not.toBeInTheDocument()
    expect(screen.queryByText('some company name')).not.toBeInTheDocument()
    expect(screen.getByText('another-symbol')).toBeInTheDocument()
    expect(screen.getByText('another company name')).toBeInTheDocument()
  })

  it('navigates to home page when user clicks on the go to home page button', async () => {
    history.push = jest.fn()
    renderFavoritesPage()

    userEvent.click(await screen.findByRole('button', { name: 'Home page' }))

    await waitFor(() => expect(history.push).toHaveBeenCalledWith('/'))
  })
})
