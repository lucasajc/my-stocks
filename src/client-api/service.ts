abstract class Service {
  public static get(endpoint: string, params?: Record<string, string>) {
    return fetch(this.buildUrl(endpoint, params).href, { method: 'GET' }).then(
      (response) => {
        return response
      }
    )
  }

  private static buildUrl(endpoint: string, params: Record<string, string>) {
    return new URL(
      `${process.env.API_URL}${endpoint}?token=${
        process.env.API_TOKEN
      }${this.getQueryParameters(params)}`
    )
  }

  private static getQueryParameters(params?: Record<string, string>) {
    return params
      ? Object.entries(params)
          .map(([key, value]) => `&${key}=${value}`)
          .join('')
      : ''
  }
}

export default Service
