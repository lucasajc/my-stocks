import React from 'react'
import { render, screen } from '@testing-library/react'
import CompanyPage from 'pages/company/company.page'
import { TestWrapper } from 'common/test-wrapper'
import { CompanyService } from 'client-api/company'
import { Quote, QuoteService } from 'client-api/quote'
import { CompanyBuilder, QuoteBuilder } from 'common/builders/'
import { ApiCallResponse } from 'client-api/api.service.interfaces'
import Company from 'client-api/company/company.model'

let symbol = 'IBM'

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

    render(<CompanyPage />, { wrapper: TestWrapper })

    expect(await screen.findByText('IBM')).toBeInTheDocument()
    expect(
      screen.getByText('International Business Machines Corp.')
    ).toBeInTheDocument()
    expect(screen.getByText('1000.34')).toBeInTheDocument()
    expect(getCompanyApiCall).toHaveBeenCalledWith('IBM')
    expect(getQuoteApiCall).toHaveBeenCalledWith('IBM')
  })

  it('shows the latest volume by default', async () => {
    setUpMocks(
      {
        status: 200,
        data: new CompanyBuilder().build(),
      },
      {
        status: 200,
        data: new QuoteBuilder()
          .withLatestVolume(421354558)
          .withPreviousVolume(null)
          .build(),
      }
    )

    render(<CompanyPage />, { wrapper: TestWrapper })

    expect(await screen.findByText(421354558)).toBeInTheDocument()
  })

  it('shows the previous volume whe latest volume is no available', async () => {
    setUpMocks(
      {
        status: 200,
        data: new CompanyBuilder().build(),
      },
      {
        status: 200,
        data: new QuoteBuilder()
          .withLatestVolume(null)
          .withPreviousVolume(73769270)
          .build(),
      }
    )

    render(<CompanyPage />, { wrapper: TestWrapper })

    expect(await screen.findByText(73769270)).toBeInTheDocument()
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

    render(<CompanyPage />, { wrapper: TestWrapper })

    expect(
      await screen.findByText(
        'We could not find any company with the symbol IBN'
      )
    )
  })
})
