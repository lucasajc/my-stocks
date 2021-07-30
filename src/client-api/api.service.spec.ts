import ApiService from './api.service'

describe('Service class', () => {
  beforeEach(() => {
    process.env = {
      ...process.env,
      ...{ API_URL: 'https://some-api-url.com', API_TOKEN: 'some-api-token' },
    }
  })

  it('makes a get request using fetch', async () => {
    global.fetch = jest.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          symbol: 'SOME-SYMBOL',
          name: 'some company name',
        }),
        { status: 200 }
      )
    )

    const response = await new ApiService().get('/some/endpoint/v1/company', {
      search: 'some-company-name',
      page: '5',
    })

    expect(global.fetch).toHaveBeenCalledWith(
      'https://some-api-url.com/some/endpoint/v1/company?search=some-company-name&page=5&token=some-api-token',
      { method: 'GET' }
    )
    expect(response.status).toBe(200)
    expect(response.error).toBeFalsy()
    expect(response.data).toEqual({
      symbol: 'SOME-SYMBOL',
      name: 'some company name',
    })
  })

  it('returns error and status code when a request does not returns ok', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue(new Response('Unknown symbol', { status: 404 }))

    const response = await new ApiService().get('/some/endpoint/v1/company')

    expect(response.status).toBe(404)
    expect(response.error).toEqual('Unknown symbol')
    expect(response.data).toBeFalsy()
  })

  it('returns error message when an error has been thrown during the request', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      throw new Error('something happened')
    })

    const response = await new ApiService().get('/some/endpoint/v1/company')

    expect(response.error).toEqual('something happened')
    expect(response.status).toBeFalsy()
    expect(response.data).toBeFalsy()
  })

  it('returns error message when an error has been thrown when body parse fails', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue(new Response('not a json body', { status: 200 }))

    const response = await new ApiService().get('/some/endpoint/v1/company')

    expect(response.error).toContain('Unexpected token')
    expect(response.status).toBeFalsy()
    expect(response.data).toBeFalsy()
  })
})
