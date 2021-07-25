import { ApiCallResponse } from './service.interfaces'

class Service {
  public get(
    endpoint: string,
    params?: Record<string, string>
  ): Promise<ApiCallResponse<any>> {
    return fetch(this.buildUrl(endpoint, params).href, { method: 'GET' }).then(
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

  private buildUrl(endpoint: string, params: Record<string, string>) {
    return new URL(
      `${process.env.API_URL}${endpoint}?token=${
        process.env.API_TOKEN
      }${this.getQueryParameters(params)}`
    )
  }

  private getQueryParameters(params?: Record<string, string>) {
    return params
      ? Object.entries(params)
          .map(([key, value]) => `&${key}=${value}`)
          .join('')
      : ''
  }
}

export default Service
