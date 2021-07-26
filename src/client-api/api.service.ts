import { ApiCallResponse } from './api.service.interfaces'

const buildUrl = (endpoint: string, params: Record<string, string>) => {
  const queryParameters = params
    ? Object.entries(params)
        .map(([key, value]) => `&${key}=${value}`)
        .join('')
    : ''
  return new URL(
    `${process.env.API_URL}${endpoint}?token=${process.env.API_TOKEN}${queryParameters}`
  )
}

class ApiService {
  public get(
    endpoint: string,
    params?: Record<string, string>
  ): Promise<ApiCallResponse<any>> {
    try {
      return fetch(buildUrl(endpoint, params).href, { method: 'GET' })
        .then(this.handleResponse)
        .catch((error: Error) => {
          return this.handleError(error)
        })
    } catch (error) {
      return Promise.resolve(this.handleError(error))
    }
  }

  private async handleResponse(
    response: Response
  ): Promise<ApiCallResponse<any>> {
    const data = response.ok ? await response.json() : null
    const error = !response.ok ? await response.text() : null
    return {
      status: response.status,
      error,
      data,
    }
  }

  private handleError(error: Error) {
    return { error: error.message }
  }
}

export default ApiService
