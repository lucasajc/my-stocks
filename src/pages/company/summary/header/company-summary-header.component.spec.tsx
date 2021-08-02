import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CompanyBuilder, QuoteBuilder } from 'common/builders'
import { TestWrapper } from 'common/test-wrapper'
import { store } from 'store/index'
import { favoriteCompaniesSlice } from 'store/slices/favorite.slice'
import { CompanySummaryHeader } from './company-summary-header.component'

const company = new CompanyBuilder().withSymbol('IBM').build()
const quote = new QuoteBuilder().withSymbol('IBM').build()

describe('Company summary header component', () => {
  afterEach(() => {
    store.dispatch(favoriteCompaniesSlice.actions.remove(company))
  })

  it('saves a company in the store when user clicks on save button', async () => {
    render(<CompanySummaryHeader company={company} quote={quote} />, {
      wrapper: TestWrapper,
    })

    userEvent.click(screen.getByText('Save'))

    expect(store.getState().favoriteCompanies.value).toEqual([company])
  })

  it('removes a saved company from the store when user clicks on favorite button', async () => {
    store.dispatch(favoriteCompaniesSlice.actions.add(company))
    render(<CompanySummaryHeader company={company} quote={quote} />, {
      wrapper: TestWrapper,
    })

    userEvent.click(screen.getByText('Saved'))

    expect(store.getState().favoriteCompanies.value).toEqual([])
  })
})
