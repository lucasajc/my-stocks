class ApiUrl extends URL {
  constructor(endpoint: string, params: Record<string, string>) {
    const queryParameters = params
      ? Object.entries(params)
          .map(([key, value]) => `&${key}=${value}`)
          .join('')
      : ''
    super(
      `${process.env.API_URL}${endpoint}?token=${process.env.API_TOKEN}${queryParameters}`
    )
  }
}

export default ApiUrl
