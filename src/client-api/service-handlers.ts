import { ApiCallResponse } from './api.service.interfaces'

export const handleResponse = async (
  response: Response
): Promise<ApiCallResponse<any>> => {
  const data = response.ok ? await response.json() : null
  const error = !response.ok ? await response.text() : null
  return {
    status: response.status,
    error,
    data,
  }
}

export const handleError = (error: Error) => {
  return { error: error.message }
}
