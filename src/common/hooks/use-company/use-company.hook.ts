import { useEffect, useState } from 'react'
import Company from 'client-api/company/company.model'
import { RootState, useDispatch, useSelector } from 'store/index'
import { useRequest } from 'common/hooks'
import { RequestStatus } from 'common/hooks/use-request/use-request.hook'
import { CompanyService } from 'client-api/company'
import { companiesSlice } from 'store/slices/companies.slice'

interface IUseCompany {
  company: Company
  status: RequestStatus
}

const selectorMap = (state: RootState) => ({
  companies: state.companies.value,
})

const useCompany = (symbol: string): IUseCompany => {
  const { companies } = useSelector(selectorMap)
  const dispatch = useDispatch()
  const [company, setCompany] = useState<Company>()
  const [status, setStatus] = useState<RequestStatus>('idle')
  const {
    data,
    status: getCompanyServiceCallStatus,
    call: getCompanyServiceCall,
  } = useRequest<Company>(() => CompanyService.getCompany(symbol))

  useEffect(() => {
    setStatus(getCompanyServiceCallStatus)
    if (data && getCompanyServiceCallStatus === 'success') {
      setCompany(data)
      dispatch(companiesSlice.actions.add(data))
    }
  }, [data, getCompanyServiceCallStatus])

  useEffect(() => {
    if (!symbol || data?.symbol.toUpperCase() === symbol.toUpperCase()) return
    const matchedStoredCompany = companies.find(
      (storedCompany: Company) =>
        storedCompany.symbol.toUpperCase() === symbol.toUpperCase()
    )
    if (matchedStoredCompany) {
      setCompany(matchedStoredCompany)
      setStatus('success')
      return
    }
    getCompanyServiceCall()
  }, [symbol, companies])

  return { company, status }
}

export default useCompany
