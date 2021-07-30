class ApiUrl extends URL {
  constructor(endpoint: string, params: Record<string, string>) {
    const searchParams = new URLSearchParams(params)
    searchParams.append('token', process.env.API_TOKEN)
    super(`${endpoint}?${searchParams.toString()}`, process.env.API_URL)
  }
}

export default ApiUrl
