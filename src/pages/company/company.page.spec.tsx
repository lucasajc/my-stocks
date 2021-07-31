import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyPage from 'pages/company/company.page'
import { TestWrapper } from 'common/test-wrapper'
import { CompanyService } from 'client-api/company'
import { Quote, QuoteService } from 'client-api/quote'
import { CompanyBuilder, QuoteBuilder } from 'common/builders/'
import { ApiCallResponse } from 'client-api/api.service.interfaces'
import Company from 'client-api/company/company.model'

let symbol = 'IBM'
const history = createMemoryHistory()

jest.mock(
  'react-router-dom',
  () =>
    ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({ symbol }),
    } as any)
)

describe('Company page', () => {
  const setUpMocks = (
    getCompanyResponse: ApiCallResponse<Company>,
    getQuoteResponse: ApiCallResponse<Quote>
  ) => {
    const getCompanyApiCall = jest
      .spyOn(CompanyService, 'getCompany')
      .mockResolvedValue(getCompanyResponse)
    const getQuoteApiCall = jest
      .spyOn(QuoteService, 'getQuote')
      .mockResolvedValue(getQuoteResponse)
    return { getCompanyApiCall, getQuoteApiCall }
  }

  const renderCompanyPage = () => {
    return render(
      <Router history={history}>
        <CompanyPage />
      </Router>,
      { wrapper: TestWrapper }
    )
  }

  beforeEach(() => localStorage.clear())

  it('shows company information and stock quote', async () => {
    const { getCompanyApiCall, getQuoteApiCall } = setUpMocks(
      {
        status: 200,
        data: new CompanyBuilder()
          .withSymbol('IBM')
          .withCompanyName('International Business Machines Corp.')
          .build(),
      },
      {
        status: 200,
        data: new QuoteBuilder().withLatestPrice(1000.34).build(),
      }
    )

    renderCompanyPage()

    expect(await screen.findByText('(IBM)')).toBeInTheDocument()
    expect(
      screen.getByText('International Business Machines Corp.')
    ).toBeInTheDocument()
    expect(screen.getByText('1000.34')).toBeInTheDocument()
    expect(getCompanyApiCall).toHaveBeenCalledWith('IBM')
    expect(getQuoteApiCall).toHaveBeenCalledWith('IBM')
  })

  it('navigates to the url of a specified company when user searches for a company', async () => {
    history.push = jest.fn()
    renderCompanyPage()

    userEvent.type(
      screen.getByPlaceholderText('Search for a company...'),
      'AAPL'
    )
    userEvent.click(screen.getByRole('button', { name: 'Search' }))

    await waitFor(() =>
      expect(history.push).toHaveBeenCalledWith('/company/AAPL')
    )
  })

  it('navigates to home page when user clicks on the go to home page button', async () => {
    history.push = jest.fn()
    renderCompanyPage()

    userEvent.click(
      await screen.findByRole('button', { name: 'Go to home page' })
    )

    await waitFor(() => expect(history.push).toHaveBeenCalledWith('/'))
  })

  it('saves a company when user clicks on save button', async () => {
    const company = new CompanyBuilder().withSymbol('IBM').build()
    setUpMocks(
      {
        status: 200,
        data: { ...company },
      },
      {
        status: 200,
        data: new QuoteBuilder().build(),
      }
    )
    renderCompanyPage()

    userEvent.type(
      screen.getByPlaceholderText('Search for a company...'),
      'ibm'
    )
    userEvent.click(screen.getByRole('button', { name: 'Search' }))
    userEvent.click(await screen.findByText('Save'))

    expect(await screen.findByText('Saved')).toBeInTheDocument()
  })

  it('removes a saved company when user clicks on favorite button', async () => {
    const company = new CompanyBuilder().withSymbol('IBM').build()
    setUpMocks(
      {
        status: 200,
        data: { ...company },
      },
      {
        status: 200,
        data: new QuoteBuilder().build(),
      }
    )
    renderCompanyPage()

    userEvent.type(
      screen.getByPlaceholderText('Search for a company...'),
      'ibm'
    )
    userEvent.click(screen.getByRole('button', { name: 'Search' }))
    userEvent.click(await screen.findByText('Saved'))

    expect(await screen.findByText('Save')).toBeInTheDocument()
  })

  it('shows an message when there is no company with the given symbol', async () => {
    symbol = 'IBN'
    setUpMocks(
      {
        status: 404,
        error: 'Unknown symbol',
      },
      {
        status: 200,
        data: new QuoteBuilder().build(),
      }
    )

    renderCompanyPage()

    expect(
      await screen.findByText(
        'Sorry, we could not find any company with the given symbol'
      )
    )
    expect(screen.getByText('"IBN"'))
  })

  it('calls service when page is rerendered with another symbol', async () => {
    jest.resetAllMocks()
    const getCompanyApiCall = jest
      .spyOn(CompanyService, 'getCompany')
      .mockResolvedValueOnce({
        data: new CompanyBuilder().withSymbol('first-symbol').build(),
      })
      .mockResolvedValueOnce({
        data: new CompanyBuilder().withSymbol('second-symbol').build(),
      })
    const getQuoteApiCall = jest
      .spyOn(QuoteService, 'getQuote')
      .mockResolvedValueOnce({
        data: new QuoteBuilder().withSymbol('first-symbol').build(),
      })
      .mockResolvedValueOnce({
        data: new QuoteBuilder().withSymbol('second-symbol').build(),
      })

    symbol = 'first-symbol'
    const { rerender } = renderCompanyPage()
    await screen.findByText('(first-symbol)')

    symbol = 'second-symbol'
    rerender(
      <Router history={history}>
        <CompanyPage />
      </Router>
    )
    await screen.findByText('(second-symbol)')

    expect(getCompanyApiCall).toHaveBeenNthCalledWith(1, 'first-symbol')
    expect(getCompanyApiCall).toHaveBeenNthCalledWith(2, 'second-symbol')
    expect(getQuoteApiCall).toHaveBeenNthCalledWith(1, 'first-symbol')
    expect(getQuoteApiCall).toHaveBeenNthCalledWith(2, 'second-symbol')
  })
})
