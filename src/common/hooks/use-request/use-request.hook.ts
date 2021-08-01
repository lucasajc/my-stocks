import { useState } from 'react'
import { ApiCallResponse } from 'client-api/api.service.interfaces'

export type RequestStatus = 'loading' | 'success' | 'error' | 'idle'

interface IUseRequest<T> {
  data: T
  status: RequestStatus
  call: () => void
}

const useRequest = <T>(
  request: () => Promise<ApiCallResponse<T>>
): IUseRequest<T> => {
  const [status, setStatus] = useState<RequestStatus>('idle')
  const [data, setData] = useState<T>()

  const call = () => {
    setStatus('loading')
    request()
      .then(async (response) => {
        setStatus(response.error ? 'error' : 'success')
        setData(response.data)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return { data, status, call }
}

export default useRequest
