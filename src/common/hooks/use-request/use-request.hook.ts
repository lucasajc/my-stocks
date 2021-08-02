import { useState } from 'react'
import { ApiCallResponse } from 'client-api/api.service.interfaces'

export type RequestStatus =
  | 'loading'
  | 'success'
  | 'not-found'
  | 'error'
  | 'idle'

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

  const handleStatus = (response: ApiCallResponse<T>) => {
    if (response.status === 404) {
      setStatus('not-found')
    } else if (response.status !== 200) {
      setStatus('error')
    } else {
      setStatus('success')
    }
  }

  const call = () => {
    setStatus('loading')
    request()
      .then(async (response) => {
        handleStatus(response)
        setData(response.data)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return { data, status, call }
}

export default useRequest
