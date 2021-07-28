import { ApiCallResponse } from './api.service.interfaces'
import { handleError, handleResponse } from './service-handlers'
import ApiUrl from './api-url'

class ApiService {
  public get(
    endpoint: string,
    params?: Record<string, string>
  ): Promise<ApiCallResponse<any>> {
    try {
      return fetch(new ApiUrl(endpoint, params).href, { method: 'GET' })
        .then(handleResponse)
        .catch((error: Error) => {
          return handleError(error)
        })
    } catch (error) {
      return Promise.resolve(handleError(error))
    }
  }
}

export default ApiService
