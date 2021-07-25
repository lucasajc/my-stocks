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
    return fetch(buildUrl(endpoint, params).href, { method: 'GET' }).then(
      async (response) => {
        const data = response.ok ? await response.json() : null
        return {
          status: response.status,
          error: !response.ok,
          data,
        }
      }
    )
  }
}

export default ApiService
