import { renderHook } from '@testing-library/react-hooks'
import { TestWrapper } from 'common/test-wrapper'
import { CompanyService } from 'client-api/company'
import CompanyBuilder from 'common/builders/company.builder'
import useCompany from 'common/hooks/use-company/use-company.hook'
import { companiesSlice } from 'store/slices/companies.slice'
import { store } from 'store/index'

const company = new CompanyBuilder()
  .withSymbol('some-company')
  .withCompanyName('some-company-data-from-api')
  .build()

describe('Use company hook', () => {
  const setUpMocks = () => {
    jest.resetAllMocks()
    const getCompanyServiceCall = jest
      .spyOn(CompanyService, 'getCompany')
      .mockResolvedValue({
        status: 200,
        data: company,
      })

    return { getCompanyServiceCall }
  }

  it('returns error when get company service call returns an error', async () => {
    jest.spyOn(CompanyService, 'getCompany').mockResolvedValue({
      status: 404,
      error: 'Unknown symbol',
    })
    const { result, waitForNextUpdate } = renderHook(
      () => useCompany('some-company'),
      {
        wrapper: TestWrapper,
      }
    )

    await waitForNextUpdate()

    expect(result.current.company).toBeFalsy()
    expect(result.current.status).toEqual('error')
  })

  it('gets company data from the API when data does not exists in the store', async () => {
    const { getCompanyServiceCall } = setUpMocks()
    const { result, waitForNextUpdate } = renderHook(
      () => useCompany('some-company'),
      {
        wrapper: TestWrapper,
      }
    )

    await waitForNextUpdate()

    expect(result.current.company).toEqual(company)
    expect(result.current.status).toEqual('success')
    expect(store.getState().companies.value).toEqual([company])
    expect(getCompanyServiceCall).toHaveBeenCalledTimes(1)
  })

  it('gets company data from the store when data exists in the store', async () => {
    store.dispatch(companiesSlice.actions.add(company))
    const { getCompanyServiceCall } = setUpMocks()
    const { result } = renderHook(() => useCompany('some-company'), {
      wrapper: TestWrapper,
    })

    expect(result.current.company).toEqual(company)
    expect(result.current.status).toEqual('success')
    expect(getCompanyServiceCall).not.toHaveBeenCalled()
  })
})
